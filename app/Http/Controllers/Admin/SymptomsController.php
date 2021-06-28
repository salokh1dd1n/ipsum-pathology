<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SymptomsRequest;
use App\Services\SymptomsService;

class SymptomsController extends Controller
{
    protected $symptomService;

    public function __construct()
    {
        $this->symptomService = app(SymptomsService::class);
    }

    public function index()
    {
//        dd(__METHOD__);
        $symptoms = $this->symptomService->getPaginatedSymptoms();
        return view('admin.diseases.symptoms.index', compact('symptoms'));
    }

    public function create()
    {
        return view('admin.diseases.symptoms.create');
    }

    public function store(SymptomsRequest $request)
    {
        $data = $request->only('title', 'description');
        return $this->symptomService->insertData($data);
    }

    public function edit($id)
    {
        $symptom = $this->symptomService->getSymptom($id);
        return view('admin.diseases.symptoms.edit', compact('symptom'));
    }

    public function update(SymptomsRequest $request, $id)
    {
        $data = $request->only('title', 'description');
        return $this->symptomService->updateData($id, $data);
    }

    public function destroy($id)
    {
        return $this->symptomService->deleteData($id);
    }
}
