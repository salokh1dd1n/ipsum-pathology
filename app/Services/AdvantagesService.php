<?php

namespace App\Services;

use App\Repositories\AdvantagesRepository;

class AdvantagesService extends CoreService
{

    protected object $repository;

    /**
     * TagsService constructor.
     * @param AdvantagesRepository $repository
     * @param string $prefix
     */
    public function __construct(AdvantagesRepository $repository, $prefix = 'advantages')
    {
        $this->repository = $repository;
        parent::__construct($this->repository, $prefix);
    }

    public function getPaginatedAdvantages()
    {
        return $this->repository->getPaginatedAdvantages();
    }

    /**
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getAdvantage(int $id)
    {
        return $this->repository->find($id);
    }

}
