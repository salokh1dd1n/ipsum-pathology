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
        return $this->repository->getAllTeam()->addSelect(['description', 'image'])->take($number)->get();
    }

    public function getPaginatedTeam()
    {
        $result = $this->repository->getPaginatedTeam();

        return $result;
    }

    public function getMember($id)
    {
        return $this->repository->getMember($id);
    }

}
