<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DiseasesRequest;
use App\Services\DiseasesService;

class DiseasesController extends Controller
{
    protected $diseasesService;

    /**
     * DiseasesController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->diseasesService = app(DiseasesService::class);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $diseases = $this->diseasesService->getPaginatedDiseases();
        return view('admin.diseases.index', compact('diseases'));
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        $symptoms = $this->diseasesService->getAllSymptoms();
        $diagnostics = $this->diseasesService->getAllDiagnostics();
        $faqs = $this->diseasesService->getAllFaq();
        return view('admin.diseases.create', compact('symptoms', 'diagnostics', 'faqs'));
    }

    /**
     * @param DiseasesRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(DiseasesRequest $request)
    {
        $data = $request->only('title', 'description', 'symptom_desc', 'treatment_desc');
        $symptoms = $request->input('symptom_id');
        $diagnostics = $request->input('diagnostic_id');
        $faq = $request->input('faq_id');
        return $this->diseasesService->insertDiseaseData($data, $symptoms, $diagnostics, $faq);
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\View
     */
    public function edit($id)
    {
        $disease = $this->diseasesService->getDisease($id);
        $symptoms = $this->diseasesService->getAllSymptoms();
        $diagnostics = $this->diseasesService->getAllDiagnostics();
        $faqs = $this->diseasesService->getAllFaq();
        return view('admin.diseases.edit', compact('disease', 'symptoms', 'diagnostics', 'faqs'));
    }

    /**
     * @param DiseasesRequest $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(DiseasesRequest $request, $id)
    {
        $data = $request->only('title', 'description', 'symptom_desc', 'treatment_desc');
        $symptoms = $request->input('symptom_id');
        $diagnostics = $request->input('diagnostic_id');
        $faq = $request->input('faq_id');
        return $this->diseasesService->updateDiseaseData($id, $data, $symptoms, $diagnostics, $faq);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        return $this->diseasesService->deleteData($id);
    }
}
