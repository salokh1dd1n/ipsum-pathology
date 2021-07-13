<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Services\DiseasesService;

class DiseasesController extends Controller
{
    protected $diseaseService;

    public function __construct()
    {
        $this->diseaseService = app(DiseasesService::class);
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
        return view('main.pages.treatment', compact('disease', 'tags'));
    }

    public function showDiagnostics($lang, $id)
    {
        $disease = $this->diseaseService->getDisease($id);
        $tags = $this->diseaseService->getRelatedFaqTags($disease->faq);
        return view('main.pages.diagnostic', compact('disease', 'tags'));
    }
}
