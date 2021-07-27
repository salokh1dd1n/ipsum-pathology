<?php

namespace App\Http\Controllers\Main;

use App\Services\ClinicsService;
use App\Services\DiseasesService;

class DiseasesController extends CoreController
{
    protected $diseaseService;
    protected $clinicsService;

    public function __construct()
    {
        parent::__construct();
        $this->diseaseService = app(DiseasesService::class);
        $this->clinicsService = app(ClinicsService::class);
    }

    public function index()
    {
        $diseases = $this->diseaseService->getPaginatedDiseases(6);
        return view('main.pages.diseases', compact('diseases'));
    }

    public function showTreatment($lang, $id)
    {
        $disease = $this->diseaseService->getDisease($id);
        $tags = $this->diseaseService->getRelatedFaqTags($disease->faq);
        $clinics = $this->clinicsService->getAllClinics();
        return view('main.pages.treatment', compact('disease', 'tags', 'clinics'));
    }

    public function showDiagnostics($lang, $id)
    {
        $disease = $this->diseaseService->getDisease($id);
        $tags = $this->diseaseService->getRelatedFaqTags($disease->faq);
        $clinics = $this->clinicsService->getAllClinics();
        return view('main.pages.diagnostic', compact('disease', 'tags', 'clinics'));
    }
}
