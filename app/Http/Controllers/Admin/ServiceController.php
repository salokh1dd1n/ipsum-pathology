<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ServiceRequest;
use App\Services\ServicesService;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    protected $serviceService;

    /**
     * ServiceController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->serviceService = app(ServicesService::class);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $services = $this->serviceService->getPaginatedServices();
        return view('admin.researches.services.index', compact('services'));
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('admin.researches.services.create');
    }

    /**
     * @param ServiceRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ServiceRequest $request)
    {
        $data = $request->only('price', 'title', 'description');
        return $this->serviceService->insertData($data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\View\View
     */
    public function edit(int $id)
    {
        $service = $this->serviceService->getService($id);
        return view('admin.researches.services.edit', compact('service'));
    }

    /**
     * @param ServiceRequest $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ServiceRequest $request, int $id)
    {
        $data = $request->only('price', 'title', 'description');
        return $this->serviceService->updateData($id, $data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        return $this->serviceService->deleteData($id);
    }

}
