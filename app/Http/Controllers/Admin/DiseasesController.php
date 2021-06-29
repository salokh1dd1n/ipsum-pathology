<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DiseasesRequest;
use App\Services\DiseasesService;

class DiseasesController extends Controller
{
    protected $diseasesService;

    public function __construct()
    {
        $this->diseasesService = app(DiseasesService::class);
    }

    public function index()
    {
        $diseases = $this->diseasesService->getPaginatedDiseases();
        return view('admin.diseases.index', compact('diseases'));
    }

    public function create()
    {
        $symptoms = $this->diseasesService->getAllSymptoms();
        $diagnostics = $this->diseasesService->getAllDiagnostics();
        $faqs = $this->diseasesService->getAllFaq();
        return view('admin.diseases.create', compact('symptoms', 'diagnostics', 'faqs'));
    }

    public function store(DiseasesRequest $request)
    {
        $data = $request->only('title', 'description', 'symptom_desc', 'treatment_desc');
        $symptoms = $request->input('symptom_id');
        $diagnostics = $request->input('diagnostic_id');
        $faq = $request->input('faq_id');
        return $this->diseasesService->insertDiseaseData($data, $symptoms, $diagnostics, $faq);
    }

    public function edit($id)
    {
        $disease = $this->diseasesService->getDisease($id);
        $symptoms = $this->diseasesService->getAllSymptoms();
        $diagnostics = $this->diseasesService->getAllDiagnostics();
        $faqs = $this->diseasesService->getAllFaq();
        return view('admin.diseases.edit', compact('disease', 'symptoms', 'diagnostics', 'faqs'));
    }

    public function update(DiseasesRequest $request, $id)
    {
        $data = $request->only('title', 'description', 'symptom_desc', 'treatment_desc');
        $symptoms = $request->input('symptom_id');
        $diagnostics = $request->input('diagnostic_id');
        $faq = $request->input('faq_id');
        return $this->diseasesService->updateDiseaseData($id, $data, $symptoms, $diagnostics, $faq);
    }

    public function destroy($id)
    {
        return $this->diseasesService->deleteData($id);
    }
}
