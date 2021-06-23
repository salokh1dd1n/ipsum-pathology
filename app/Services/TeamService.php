<?php

namespace App\Services;


use App\Repositories\TeamRepository;
use App\Repositories\RolesRepository;

class TeamService extends CoreService
{
    protected $rolesRepository;
    public function __construct(TeamRepository $repository, $prefix = 'team')
    {
        parent::__construct($repository, $prefix);
        $this->rolesRepository = app(RolesRepository::class);

    }

    public function getPaginatedTeam()
    {
        $result = $this->repository->getPaginatedTeam();

        return $result;
    }

    public function getAllTeamRoles()
    {
        return $this->rolesRepository->getAllTeamRoles()->get();
    }


    public function getMember($id)
    {
        return $this->repository->getMember($id);
    }

}
