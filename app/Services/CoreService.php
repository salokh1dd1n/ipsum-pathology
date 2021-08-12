<?php

namespace App\Services;

use App\Services\Traits\ImageUploadTrait;
use App\Services\Traits\RedirectTrait;

class CoreService
{

    use ImageUploadTrait, RedirectTrait;

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
        return $this->redirectWithAlert($result, $this->prefix . '.edit', 'update', $result->id);
    }

    public function updateData(int $id, $data)
    {
        $result = $this->repository->edit($id, $data);
        return $this->redirectWithAlert($result, $this->prefix . '.edit', 'update', $id);
    }

    public function deleteData(int $id)
    {
        $item = $this->repository->find($id);
        if ($item->image) {
            $this->deleteCheckedImage($id);
        }
        $result = $item->delete($id);
        return $this->redirectWithAlert($result, $this->prefix . '.index', 'delete', null, 'warning');
    }

    public function setPosition($id, $position)
    {
        $result = $this->repository->edit($id, $position);
        return $this->redirectWithAlert($result, $this->prefix . '.index', 'update');
    }

}
