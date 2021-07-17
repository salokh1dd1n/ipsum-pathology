<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Services\ClinicsService;

class ClinicsController extends Controller
{
    protected $service;

    public function __construct()
    {
        $this->service = app(ClinicsService::class);
    }

    public function index()
    {
        $clinics = $this->service->getPaginatedClinics(6);
//        dd($clinics->count());
        return view('main.pages.clinics', compact('clinics'));
    }
}
