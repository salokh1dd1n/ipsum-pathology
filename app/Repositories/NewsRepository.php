<?php

namespace App\Repositories;

use App\Models\News;
use App\Models\News as Model;
use App\Repositories\Interfaces\NewsRepositoryInterface;

class NewsRepository extends CoreRepository implements NewsRepositoryInterface
{

    /**
     * UserRepository constructor.
     *
     * @param News $model
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
            'created_at',
        ];

        $result = $this
            ->model
            ->select($columns);

        return $result;
    }

    public function getPaginatedNews()
    {
        $result = $this
            ->getAllNews()
            ->paginate(10);

        return $result;
    }

    public function getNews(int $id)
    {
        $result = $this
            ->model
            ->find($id);

        return $result;
    }


    public function editNews(int $id, array $data)
    {
        $result = $this
            ->model
            ->findOrFail($id)
            ->update($data);

        return $result;
    }


}
