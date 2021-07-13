<?php

namespace App\Services;

use App\Repositories\ApplicationsRepository;
use App\Services\Traits\RedirectTrait;

class ApplicationService extends CoreService
{
    use RedirectTrait;

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

    public function insertApplicationData($data, $lang)
    {
        $result = $this->repository->create($data);
        if ($result) {
            return redirect(url()->route('index', $lang) . '#applicationForm')
                ->with(['applicationMsg' => 'Отправлено! Спасибо за ожидание скоро с вами свяжутся']);
        } else {
            return abort(500);
        }
    }

}
