<?php

namespace App\Services;

use App\Repositories\AdvantagesRepository;
use App\Repositories\ServicesRepository;

class ServicesService extends CoreService
{

    protected object $repository;

    /**
     * TagsService constructor.
     * @param ServicesRepository $repository
     * @param string $prefix
     */
    public function __construct(ServicesRepository $repository, $prefix = 'services')
    {
        $this->repository = $repository;
        parent::__construct($this->repository, $prefix);
    }

    public function getPaginatedServices()
    {
        return $this->repository->getPaginatedServices();
    }

    /**
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getService(int $id)
    {
        return $this->repository->find($id);
    }

}
