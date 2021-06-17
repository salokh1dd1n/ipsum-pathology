<?php

namespace App\Repositories\Interfaces;

use Illuminate\Database\Eloquent\Model;

/**
 * Interface EloquentRepositoryInterface
 * @package App\Repositories
 */
interface CoreRepositoryInterface
{
    /**
     * @param array $attributes
     * @return Model
     */
    public function create(array $attributes);

    public function edit(int $id, array $attributes);

    public function delete(int $id);

    /**
     * @param $id
     * @return Model
     */
    public function find(int $id);
}
