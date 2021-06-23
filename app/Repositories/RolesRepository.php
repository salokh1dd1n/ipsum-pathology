<?php

namespace App\Repositories;

use App\Models\Roles as Model;

class RolesRepository extends CoreRepository
{
    public function __construct(Model $model)
    {
        parent::__construct($model);
    }

    public function getAllTeamRoles()
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

    public function getPaginatedTeamRoles()
    {
        $result = $this
            ->getAllTeamRoles()
            ->paginate(10);

        return $result;
    }

}
