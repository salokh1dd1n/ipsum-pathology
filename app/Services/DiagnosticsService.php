<?php

namespace App\Services;

use App\Repositories\DiagnosticsRepository;

class DiagnosticsService extends CoreService
{

    protected object $repository;

    /**
     * TagsService constructor.
     * @param DiagnosticsRepository $repository
     * @param string $prefix
     */
    public function __construct(DiagnosticsRepository $repository, $prefix = 'diagnostics')
    {
        $this->repository = $repository;
        parent::__construct($this->repository, $prefix);
    }

    public function getPaginatedDiagnostics()
    {
        return $this->repository->getPaginatedDiagnostics();
    }

    /**
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getDiagnostic(int $id)
    {
        return $this->repository->find($id);
    }

}
