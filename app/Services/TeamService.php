<?php

namespace App\Services;

use App\Repositories\TeamRepository;

class TeamService extends CoreService
{
    protected object $repository;

    /**
     * TeamService constructor.
     * @param TeamRepository $repository
     * @param string $prefix
     */
    public function __construct(TeamRepository $repository, $prefix = 'team')
    {
        parent::__construct($repository, $prefix);
        $this->repository = $repository;

    }

    public function getAllTeam($number)
    {
        return $this->repository->getAllTeam()->take($number)->get();
    }

    public function getPaginatedTeam($number)
    {
        $result = $this->repository->getPaginatedTeam($number);

        return $result;
    }

    public function getMember($id)
    {
        return $this->repository->getMember($id);
    }

}
