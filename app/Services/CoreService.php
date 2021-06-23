<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class CoreService
{
    protected object $repository;
    protected string $prefix;

    public function __construct($repository, $prefix)
    {
        $this->repository = $repository;
        $this->prefix = $prefix;
    }

    public function insertDataWithImage($file, array $data)
    {
        $data['image'] = $this->uploadRenamedImage($file);
        return $this->insertData($data);
    }

    public function updateDataWithImage(int $id, $file, array $data)
    {
        if (isset($file) and $file != null) {
            // Delete Image
            $this->deleteCheckedImage($id);

            $data['image'] = $this->uploadRenamedImage($file);
            return $this->updateData($id, $data);
        } else {
            return $this->updateData($id, $data);
        }

    }

    public function insertData($data)
    {
        $result = $this->repository->create($data);
        return $this->redirectWithAlert($result, $this->prefix.'.edit', 'update', $result->id);
    }

    public function updateData(int $id, $data)
    {
        $result = $this->repository->edit($id, $data);
        return $this->redirectWithAlert($result, $this->prefix.'.edit', 'update', $id);
    }

    public function deleteData(int $id)
    {
        $result = $this->repository->delete($id);
        return $this->redirectWithAlert($result, $this->prefix.'.index', 'delete', null, 'warning');
    }

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


    private function redirectWithAlert($result, $route, $action, $id = null, $type = 'success')
    {
        $message = null;
        switch ($action) {
            case "create":
                $message = 'Успешно сохранено';
                break;
            case "update":
                $message = 'Успешно обновлено';
                break;
            case "delete":
                $message = 'Успешно удалено';
                break;
        }

        if ($result) {
            return redirect()
                ->route($route, $id)
                ->with([$type => $message]);
        } else {
            return back()
                ->with(['error' => 'Ошибка, Свяжитесь с администратором'])
                ->withInput();
        }
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
