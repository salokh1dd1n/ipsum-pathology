<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ResearchRequest;
use App\Services\ResearchesService;

class ResearchesController extends Controller
{
    protected $researchService;

    /**
     * ResearchesController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->researchService = app(ResearchesService::class);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $researches = $this->researchService->getPaginatedResearch(10);
        return view('admin.researches.index', compact('researches'));
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        $advantages = $this->researchService->getAllAdvantages();
        $services = $this->researchService->getAllServices();
        return view('admin.researches.create', compact('advantages', 'services'));
    }

    /**
     * @param ResearchRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ResearchRequest $request)
    {
        $data = $request->only('title', 'short_desc', 'description');
        $file = $request->file('image');
        $services = $request->input('service_id');
        $advantages = $request->input('advantage_id');
        return $this->researchService->insertResearchData($file, $data, $services, $advantages);
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\View\View
     */
    public function edit(int $id)
    {
        $services = $this->researchService->getAllServices();
        $advantages = $this->researchService->getAllAdvantages();
        $research = $this->researchService->getResearch($id);
        return view('admin.researches.edit', compact('research', 'services', 'advantages'));
    }

    /**
     * @param ResearchRequest $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ResearchRequest $request, int $id)
    {
        $data = $request->only('title', 'short_desc', 'description');
        $file = $request->file('image');
        $services = $request->input('service_id');
        $advantages = $request->input('advantage_id');
        return $this->researchService->updateResearchData($id, $file, $data, $services, $advantages);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        return $this->researchService->deleteData($id);
    }
}
