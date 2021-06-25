<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;


class CoreRepository
{
    /**
     * @var Model
     */
    protected object $model;

    /**
     * CoreRepository constructor.
     *
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }


    /**
     * @param array $attributes
     * @return Model
     */
    public function create(array $attributes)
    {
        return $this->model->create($attributes);
    }

    /**
     * @param int $id
     * @param array $attributes
     * @return Model
     */
    public function edit(int $id, array $attributes)
    {
        return $this
            ->model
            ->find($id)
            ->update($attributes);
    }

    /**
     * @param $id
     * @return Model
     */
    public function delete(int $id)
    {
        return $this->model->destroy($id);
    }

    /**
     * @param $id
     * @return Model
     */
    public function find($id)
    {
        return $this->model->find($id);
    }

}
