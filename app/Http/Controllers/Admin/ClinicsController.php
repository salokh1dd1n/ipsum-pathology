<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClinicsRequest;
use App\Services\ClinicsService;
use Illuminate\Http\Request;

class ClinicsController extends Controller
{
    protected $clinicsService;

    public function __construct()
    {
        $this->clinicsService = app(ClinicsService::class);
    }

    public function index()
    {
        $clinics = $this->clinicsService->getPaginatedClinics();
        return view('admin.clinics.index', compact('clinics'));
    }

    public function create()
    {
        return view('admin.clinics.create');
    }

    public function store(ClinicsRequest $request)
    {
        $data = $request->only('title', 'phone_number', 'address');
        return $this->clinicsService->insertData($data);
    }

    public function edit(int $id)
    {
        $clinic = $this->clinicsService->getClinic($id);
        return view('admin.clinics.edit', compact('clinic'));
    }

    public function update(ClinicsRequest $request, int $id)
    {
        $data = $request->only('title', 'phone_number', 'address');
        return $this->clinicsService->updateData($id, $data);
    }

    public function destroy(int $id)
    {
        return $this->clinicsService->deleteData($id);
    }

}

