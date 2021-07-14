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
        dd(__METHOD__);
    }

    public function show($lang, $id)
    {
        $research = $this->service->getResearch($id);
//        dd($research->services);
        return view('main.pages.research', compact('research'));
    }
}
