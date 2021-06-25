<?php

namespace App\Repositories;

use App\Models\Advantage as Model;

class AdvantagesRepository extends CoreRepository
{

    public function __construct(Model $model)
    {
        parent::__construct($model);
    }

    public function getAllAdvantages()
    {
        $columns = [
            'id',
            'title',
            'image'
        ];

        $result = $this
            ->model
            ->select($columns);

        return $result;
    }

    public function getPaginatedAdvantages()
    {
        $result = $this
            ->getAllAdvantages()
            ->paginate(10);

        return $result;
    }

}
