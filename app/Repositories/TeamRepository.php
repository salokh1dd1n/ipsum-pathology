<?php

namespace App\Repositories;

use App\Models\Team as Model;

class TeamRepository extends CoreRepository
{

    /**
     * TeamRepository constructor.
     *
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        parent::__construct($model);
    }

    public function getAllTeam()
    {
        $columns = [
            'id',
            'name',
            'role',
            'phone_number',
            'description',
            'image'
        ];

        $result = $this
            ->model
            ->select($columns);

        return $result;
    }

    public function getPaginatedTeam($number)
    {
        $result = $this
            ->getAllTeam()
            ->orderByDesc('id')
            ->paginate($number);

        return $result;
    }

    public function getMember($id)
    {
        $columns = [
            'id',
            'name',
            'role',
            'phone_number',
            'description',
            'image'
        ];
        $result = $this
            ->model
            ->select($columns)
            ->where('id', $id)
            ->first();

        return $result;
    }

}


