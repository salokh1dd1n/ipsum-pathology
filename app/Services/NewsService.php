<?php

namespace App\Services;

use App\Repositories\Interfaces\NewsRepositoryInterface;
use Illuminate\Support\Facades\Storage;

class NewsService extends CoreService
{
    protected $newsRepository;
    protected $request;
    protected $redirectRoute;

    public function __construct()
    {
        parent::__construct();
        $this->newsRepository = app(NewsRepositoryInterface::class);
        $this->redirectRoute = 'news.index';
    }

    public function getPaginatedNews()
    {
        return $this->newsRepository->getPaginatedNews();
    }

    public function getNews($id)
    {
        return $this->newsRepository->getNews($id);
    }

    public function insertNewsData($file, array $data)
    {
        $uploadedImage = $this->uploadRenamedImage($file);
        $data['image'] = $uploadedImage['name'];

        if ($uploadedImage['result']) {
            $result = $this->newsRepository->create($data);
            return $this->redirectWithAlert($result, $this->redirectRoute, 'create');
        }
    }

    public function updateNewsData(int $id, $file, array $data)
    {
        if (isset($file) and $file != null) {
            // Delete Image
            $this->deleteCheckedImage($id);
            return $this->insertUpdateUploadedImage($data, $file, $id);
        } else {
            $result = $this->newsRepository->edit($id, $data);
            return $this->redirectWithAlert($result, $this->redirectRoute, 'update');
        }

    }

    public function deleteNewsData(int $id)
    {
        $result = $this->newsRepository->delete(($id));
        return $this->redirectWithAlert($result, $this->redirectRoute, 'delete', 'warning');
    }

    public function insertUpdateUploadedImage($data, $file, $id = null)
    {

        $uploadedImage = $this->uploadRenamedImage($file);
        $data['image'] = $uploadedImage['name'];
        if ($uploadedImage['result']) {
            if ($id != null) {
                $result = $this->newsRepository->edit($id, $data);
                return $this->redirectWithAlert($result, $this->redirectRoute, 'update');
            } else {
                $result = $this->newsRepository->create($data);
                return $this->redirectWithAlert($result, $this->redirectRoute, 'create');
            }
        }

    }

    public function uploadRenamedImage($file)
    {
        $result = [];
        $imageName = time() . '.' . $file->extension();
        $result['name'] = $imageName;
        $uploadedFile = $file->storeAs('uploads/images', $imageName);
        $result['result'] = $uploadedFile;

        return $result;
    }

    public function checkImageExists($id)
    {
        $newsItem = $this->newsRepository->getNews($id);
        $isExists = Storage::exists('uploads/images/' . $newsItem->image);

        $result = ($newsItem->image && $isExists);
        $result ? true : false;

        return $result;
    }

    public function deleteCheckedImage(int $id)
    {
        $checkImage = $this->checkImageExists($id);
        $newsItem = $this->newsRepository->getNews($id);

        if ($checkImage) {
            $old_file = 'uploads/images/' . $newsItem->image;
            return Storage::delete($old_file);
        }

    }
}
