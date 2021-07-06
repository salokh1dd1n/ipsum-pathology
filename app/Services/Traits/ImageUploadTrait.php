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


    private function deleteCheckedImage(int $id)
    {
        $image = $this->checkImageExists($id);

        if ($image) {
            $old_file = 'uploads/images/' . $image->image;
            return Storage::delete($old_file);
        }
    }

    /**
     * @param int $id
     * @return bool|\Illuminate\Database\Eloquent\Model
     */
    private function checkImageExists(int $id)
    {
        $item = $this->repository->find($id);
        $isExists = Storage::exists('uploads/images/' . $item->image);

        if ($item->image && $isExists) {
            return $item;
        } else {
            return false;
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
