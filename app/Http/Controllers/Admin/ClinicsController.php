<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClinicsRequest;
use App\Services\ClinicsService;
use Illuminate\Http\Request;

class ClinicsController extends Controller
{
    protected $clinicsService;

    /**
     * ClinicsController constructor.
     */
    public function __construct()
    {
        $this->clinicsService = app(ClinicsService::class);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $clinics = $this->clinicsService->getPaginatedClinics();
        return view('admin.clinics.index', compact('clinics'));
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('admin.clinics.create');
    }

    /**
     * @param ClinicsRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ClinicsRequest $request)
    {
        $data = $request->only('title', 'phone_number', 'address');
        return $this->clinicsService->insertData($data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\View\View
     */
    public function edit(int $id)
    {
        $clinic = $this->clinicsService->getClinic($id);
        return view('admin.clinics.edit', compact('clinic'));
    }

    /**
     * @param ClinicsRequest $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ClinicsRequest $request, int $id)
    {
        $data = $request->only('title', 'phone_number', 'address');
        return $this->clinicsService->updateData($id, $data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        return $this->clinicsService->deleteData($id);
    }

}

