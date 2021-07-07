<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DiagnosticsRequest;
use App\Services\DiagnosticsService;

class DiagnosticsController extends Controller
{
    protected $diagnosticsService;

    /**
     * DiagnosticsController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->diagnosticsService = app(DiagnosticsService::class);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $diagnostics = $this->diagnosticsService->getPaginatedDiagnostics();
        return view('admin.diseases.diagnostics.index', compact('diagnostics'));
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('admin.diseases.diagnostics.create');
    }

    /**
     * @param DiagnosticsRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(DiagnosticsRequest $request)
    {
        $data = $request->only('title', 'price', 'description');
        return $this->diagnosticsService->insertData($data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\View\View
     */
    public function edit(int $id)
    {
        $diagnostic = $this->diagnosticsService->getDiagnostic($id);
        return view('admin.diseases.diagnostics.edit', compact('diagnostic'));
    }

    /**
     * @param DiagnosticsRequest $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(DiagnosticsRequest $request, int $id)
    {
        $data = $request->only('title', 'price', 'description');
        return $this->diagnosticsService->updateData($id, $data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        return $this->diagnosticsService->deleteData($id);
    }
}
