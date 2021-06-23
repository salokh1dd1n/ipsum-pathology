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
            'role_id'
        ];

        $result = $this
            ->model
            ->select($columns);

        return $result;
    }

    public function getPaginatedTeam()
    {
        $result = $this
            ->getAllTeam()
            ->paginate(10);

        return $result;
    }

    public function getMember($id)
    {
        $columns = [
            'id',
            'name',
            'role_id',
            'phone_number',
            'description',
            'image'
        ];
        $result = $this
            ->model
            ->select($columns)
            ->where('id', $id)
            ->with(['role:id,title'])
            ->first();

        return $result;
    }

}


