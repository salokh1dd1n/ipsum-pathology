<?php

namespace App\Repositories;

use App\Models\Symptom as Model;

class SymptomsRepository extends CoreRepository
{

    public function __construct(Model $model)
    {
        parent::__construct($model);
    }

    public function getAllSymptoms()
    {
        $columns = [
            'id',
            'title',
            'description'
        ];

        $result = $this
            ->model
            ->select($columns);

        return $result;
    }

    public function getPaginatedSymptoms()
    {
        $result = $this
            ->getAllSymptoms()
            ->orderByDesc('id')
            ->paginate(10);

        return $result;
    }

}
