<?php

namespace App\Services;


use App\Repositories\AdvantagesRepository;
use App\Repositories\ResearchesRepository;
use App\Repositories\ServicesRepository;
use App\Services\Traits\ImageUploadTrait;
use App\Services\Traits\RedirectTrait;

class ResearchesService extends CoreService
{
    use ImageUploadTrait, RedirectTrait;

    protected object $repository;
    protected $servicesRepository;
    protected $advantagesRepository;

    public function __construct(ResearchesRepository $repository, $prefix = 'researches')
    {
        parent::__construct($repository, $prefix);
        $this->servicesRepository = app(ServicesRepository::class);
        $this->advantagesRepository = app(AdvantagesRepository::class);
        $this->repository = $repository;
    }

    public function getPaginatedResearch()
    {
        return $this->repository->getPaginatedResearches();
    }

    public function getAllServices()
    {
        return $this->servicesRepository->getAllServices()->get();
    }

    public function getAllAdvantages()
    {
        return $this->advantagesRepository->getAllAdvantages()->get();
    }

    public function getResearch($id)
    {
        return $this->repository->getResearch($id);
    }

    public function insertResearchData($file, $data, $service, $advantage)
    {
        $data['image'] = $this->uploadRenamedImage($file);
        $result = $this->repository->insertResearchData($data, $service, $advantage);
        return $this->redirectWithAlert($result, $this->prefix . '.edit', 'create', $result->id);
    }

    public function updateResearchData(int $id, $file, $data, $service, $advantage)
    {
        if (isset($file) and $file != null) {
            // Delete Image
            $this->deleteCheckedImage($id);

            $data['image'] = $this->uploadRenamedImage($file);
            $result = $this->repository->updateResearchData($id, $data, $service, $advantage);
        } else {
            $result = $this->repository->updateResearchData($id, $data, $service, $advantage);
        }
        return $this->redirectWithAlert($result, $this->prefix . '.edit', 'update', $id);
    }

}
