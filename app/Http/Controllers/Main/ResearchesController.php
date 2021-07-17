<?php

namespace App\Http\Controllers\Main;

use App\Services\ResearchesService;

class ResearchesController extends CoreController
{
    protected $service;

    public function __construct()
    {
        parent::__construct();
        $this->service = app(ResearchesService::class);
    }

    public function index()
    {
        $researches = $this->service->getPaginatedResearch(6);
        return view('main.pages.researches', compact('researches'));
    }

    public function show($lang, $id)
    {
        $research = $this->service->getResearch($id);
        return view('main.pages.research', compact('research'));
    }
}
