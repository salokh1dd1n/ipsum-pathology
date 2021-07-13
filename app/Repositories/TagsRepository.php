<?php

namespace App\Repositories;

use App\Models\Tags as Model;

class TagsRepository extends CoreRepository
{

    public function __construct(Model $model)
    {
        parent::__construct($model);
    }

    public function getAllFaqTags()
    {
        $columns = [
            'id',
            'title',
        ];

        $result = $this
            ->model
            ->select($columns);

        return $result;
    }

    public function getPaginatedFaqTags()
    {
        $result = $this
            ->getAllFaqTags()
            ->orderByDesc('id')
            ->paginate(10);

        return $result;
    }
}
