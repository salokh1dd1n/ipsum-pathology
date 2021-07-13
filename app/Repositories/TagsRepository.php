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
            ->paginate(10);

        return $result;
    }

    public function getRelatedFaqTags($ids)
    {

        $result = $this
            ->getAllFaqTags()
            ->whereIn('id', $ids)
            ->get();

        return $result;
    }
}
