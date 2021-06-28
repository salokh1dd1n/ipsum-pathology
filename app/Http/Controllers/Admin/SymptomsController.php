<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SymptomsRequest;
use App\Services\SymptomsService;

class SymptomsController extends Controller
{
    protected $symptomService;

    /**
     * SymptomsController constructor.
     */
    public function __construct()
    {
        $this->symptomService = app(SymptomsService::class);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $symptoms = $this->symptomService->getPaginatedSymptoms();
        return view('admin.diseases.symptoms.index', compact('symptoms'));
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('admin.diseases.symptoms.create');
    }

    /**
     * @param SymptomsRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(SymptomsRequest $request)
    {
        $data = $request->only('title', 'description');
        return $this->symptomService->insertData($data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(int $id)
    {
        $symptom = $this->symptomService->getSymptom($id);
        return view('admin.diseases.symptoms.edit', compact('symptom'));
    }

    /**
     * @param SymptomsRequest $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(SymptomsRequest $request, int $id)
    {
        $data = $request->only('title', 'description');
        return $this->symptomService->updateData($id, $data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        return $this->symptomService->deleteData($id);
    }
}
