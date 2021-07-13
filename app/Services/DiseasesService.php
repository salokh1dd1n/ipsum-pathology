<?php

namespace App\Services;


use App\Repositories\DiagnosticsRepository;
use App\Repositories\DiseasesRepository;
use App\Repositories\FaqRepository;
use App\Repositories\SymptomsRepository;
use App\Repositories\TagsRepository;
use App\Services\Traits\ImageUploadTrait;
use App\Services\Traits\RedirectTrait;

class DiseasesService extends CoreService
{
    use ImageUploadTrait, RedirectTrait;

    protected object $repository;
    protected $faqRepository;
    protected $tagsRepository;
    protected $symptomsRepository;
    protected $diagnosticsRepository;

    public function __construct(DiseasesRepository $repository, $prefix = 'diseases')
    {
        parent::__construct($repository, $prefix);
        $this->faqRepository = app(FaqRepository::class);
        $this->tagsRepository = app(TagsRepository::class);
        $this->symptomsRepository = app(SymptomsRepository::class);
        $this->diagnosticsRepository = app(DiagnosticsRepository::class);
        $this->repository = $repository;
    }

    public function getPaginatedDiseases($number)
    {
        return $this->repository->getPaginatedDiseases($number);
    }

    public function getAllFaq()
    {
        return $this->faqRepository->getAllFaq()->get();
    }

    public function getRelatedFaqTags($ids)
    {
        return $this->tagsRepository->getRelatedFaqTags($ids);
    }
    public function getAllSymptoms()
    {
        return $this->symptomsRepository->getAllSymptoms()->get();
    }


    public function getAllDiagnostics()
    {
        return $this->diagnosticsRepository->getAllDiagnostics()->get();
    }


    public function getDisease($id)
    {
        return $this->repository->getDisease($id);
    }

    public function insertDiseaseData($data, $file, $symptoms, $diagnostics, $faq)
    {
        $data['image'] = $this->uploadRenamedImage($file);
        $result = $this->repository->insertDiseaseData($data, $symptoms, $diagnostics, $faq);
        return $this->redirectWithAlert($result, $this->prefix . '.edit', 'create', $result->id);
    }

    public function updateDiseaseData($id, $data, $file, $symptoms, $diagnostics, $faq)
    {
        if (isset($file) and $file != null) {
            // Delete Image
            $this->deleteCheckedImage($id);

            $data['image'] = $this->uploadRenamedImage($file);

            $result = $this->repository->upadateDiseaseData($id, $data, $symptoms, $diagnostics, $faq);
            return $this->redirectWithAlert($result, $this->prefix . '.edit', 'update', $id);
        } else {
            $result = $this->repository->upadateDiseaseData($id, $data, $symptoms, $diagnostics, $faq);
            return $this->redirectWithAlert($result, $this->prefix . '.edit', 'update', $id);
        }
    }

}
