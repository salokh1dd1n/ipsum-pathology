<?php

namespace App\Repositories;

use App\Models\Service as Model;

class ServicesRepository extends CoreRepository
{

    public function __construct(Model $model)
    {
        parent::__construct($model);
    }

    public function getAllServices()
    {
        $columns = [
            'id',
            'title',
            'description',
            'price'
        ];

        $result = $this
            ->model
            ->select($columns);

        return $result;
    }

    public function getPaginatedServices()
    {
        $result = $this
            ->getAllServices()
            ->paginate(10);

        return $result;
    }

}
