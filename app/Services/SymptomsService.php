<?php

namespace App\Services;

use App\Repositories\SymptomsRepository;

class SymptomsService extends CoreService
{

    protected object $repository;

    /**
     * TagsService constructor.
     * @param SymptomsRepository $repository
     * @param string $prefix
     */
    public function __construct(SymptomsRepository $repository, $prefix = 'symptoms')
    {
        $this->repository = $repository;
        parent::__construct($this->repository, $prefix);
    }

    public function getPaginatedSymptoms()
    {
        return $this->repository->getPaginatedSymptoms();
    }

    /**
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getSymptom(int $id)
    {
        return $this->repository->find($id);
    }

}
