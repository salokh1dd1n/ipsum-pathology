<?php

namespace App\Services;


use App\Repositories\ClinicsRepository;

class ClinicsService extends CoreService
{
    protected object $repository;

    /**
     * TeamService constructor.
     * @param ClinicsRepository $repository
     * @param string $prefix
     */
    public function __construct(ClinicsRepository $repository, $prefix = 'clinics')
    {
        parent::__construct($repository, $prefix);
        $this->repository = $repository;

    }

    public function getPaginatedClinics()
    {
        $result = $this->repository->getPaginatedClinics();

        return $result;
    }


    public function getClinic($id)
    {
        return $this->repository->getClinic($id);
    }

}
