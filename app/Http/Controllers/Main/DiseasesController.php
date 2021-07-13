<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Services\DiseasesService;
use Illuminate\Http\Request;

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


        $ids = [];
        foreach ($disease->faq as $faq) {
            foreach ($faq->tags as $tag) {
                $ids[] = $tag->id;
            }
        }
        $tags = $this->diseaseService->getRelatedFaqTags($ids);
        return view('main.pages.treatment', compact('disease', 'tags'));
    }

    public function showDiagnostics($id)
    {
        dd(__METHOD__, $id);
    }
}
