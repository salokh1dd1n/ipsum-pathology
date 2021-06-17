<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class CoreRepository
{
    /**
     * @var Model
     */
    protected $model;

    /**
     * BaseRepository constructor.
     *
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }


    /**
     * @param array $attributes
     *
     * @return Model
     */
    public function create(array $attributes)
    {
        return $this->model->create($attributes);
    }

    public function edit(int $id, array $attributes)
    {
        return $this->model
            ->find($id)
            ->update($attributes);
    }

    public function delete(int $id)
    {
        return $this->model->destroy($id);
    }

    /**
     * @param $id
     * @return Model
     */
    public function find(int $id)
    {
        return $this->model->find($id);
    }

}
