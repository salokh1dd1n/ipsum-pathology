<?php

namespace App\Services\Traits;

use App\Repositories\CoreRepository;
use App\Repositories\TagsRepository;
use Illuminate\Support\Facades\Storage;

trait ImageUploadTrait
{
    protected object $repository;


    /**
     * ImageUploadTrait constructor.
     * @param CoreRepository $repository
     */
    public function __construct(CoreRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param int $id
     * @return bool
     */
    private function deleteCheckedImage(int $id)
    {
        $checkImage = $this->checkImageExists($id);
        $newsItem = $this->repository->find($id);

        if ($checkImage) {
            $old_file = 'uploads/images/' . $newsItem->image;
            return Storage::delete($old_file);
        }
    }

    private function checkImageExists($id)
    {
        $item = $this->repository->find($id);
        $isExists = Storage::exists('uploads/images/' . $item->image);

        $result = ($item->image && $isExists);
        $result ? true : false;

        return $result;
    }

    private function uploadRenamedImage($file)
    {
        $imageName = time() . '.' . $file->extension();
        $uploadedFile = $file->storeAs('uploads/images', $imageName);
        $result = $uploadedFile;

        if ($result) {
            return $imageName;
        }
    }

}
