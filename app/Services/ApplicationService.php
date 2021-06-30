<?php

namespace App\Services;

use App\Repositories\ApplicationsRepository;
use App\Repositories\TeamRepository;

class ApplicationService extends CoreService
{
    protected object $repository;

    /**
     * TeamService constructor.
     * @param ApplicationsRepository $repository
     * @param string $prefix
     */
    public function __construct(ApplicationsRepository $repository, $prefix = 'applications')
    {
        parent::__construct($repository, $prefix);
        $this->repository = $repository;

    }

    public function getPaginatedApplication()
    {
        $result = $this->repository->getPaginatedApplication();
        return $result;
    }

    public function done($id)
    {
        $result = $this->repository->done($id);
        if ($result) {
            return redirect()
                ->route('applications.index')
                ->with(['success' => 'Успешно завершено']);
        } else {
            return back()
                ->with(['error' => 'Ошибка, Свяжитесь с администратором'])
                ->withInput();
        }
    }

}
