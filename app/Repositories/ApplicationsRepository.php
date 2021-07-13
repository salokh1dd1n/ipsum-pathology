<?php

namespace App\Repositories;

use App\Models\Application as Model;

class ApplicationsRepository extends CoreRepository
{

    /**
     * TeamRepository constructor.
     *
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        parent::__construct($model);
    }

    public function getAllApplication()
    {
        $columns = [
            'id',
            'fio',
            'phone_number',
            'status'
        ];

        $result = $this
            ->model
            ->select($columns);

        return $result;
    }

    public function getPaginatedApplication()
    {
        $result = $this
            ->getAllApplication()
            ->orderByDesc('id')
            ->paginate(10);

        return $result;
    }

    public function done($id)
    {
        $result = $this->model->find($id);
        $result->status = 1;
        $result->save();
        return $result;
    }

}


