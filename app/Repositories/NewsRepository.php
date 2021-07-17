<?php

namespace App\Repositories;

use App\Models\News as Model;

class NewsRepository extends CoreRepository
{

    /**
     * NewsRepository constructor.
     *
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        parent::__construct($model);
    }


    public function getAllNews()
    {
        $columns = [
            'id',
            'title',
            'image',
            'description',
            'created_at'
        ];

        $result = $this
            ->model
            ->select($columns);

        return $result;
    }

    public function getPaginatedNews($number)
    {
        $result = $this
            ->getAllNews()
            ->orderByDesc('id')
            ->paginate($number);

        return $result;
    }

}
