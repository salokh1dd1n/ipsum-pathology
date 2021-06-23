<?php

namespace App\Services;


use App\Repositories\RolesRepository;

class RolesService extends CoreService
{

    /**
     * RolesService constructor.
     * @param RolesRepository $repository
     * @param string $prefix
     */
    public function __construct(RolesRepository $repository, $prefix = 'roles')
    {
        parent::__construct($repository, $prefix);
    }

    public function getPaginatedTeamRoles()
    {
        return $this->repository->getPaginatedTeamRoles();
    }

    public function getTeamRole($id)
    {
        return $this->repository->find($id);
    }

}
