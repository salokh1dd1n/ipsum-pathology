<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Services\ClinicsService;
use Yandex\Geocode\Api;

class ClinicsController extends Controller
{
    protected $service;
    protected $yandexApi;

    public function __construct()
    {
        $this->service = app(ClinicsService::class);
        $this->yandexApi = app(Api::class);
    }

    public function index()
    {
        $clinics = $this->service->getPaginatedClinics(6);
//        $yandexData = $this->service->getAllClinics();
        $yandexData = $clinics->getCollection();
        dd($yandexData);
        return view('main.pages.clinics', compact('clinics'));
    }
}
