<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\ApplicationService;
use Illuminate\Http\Request;

class ApplicationsController extends Controller
{
    protected $applicationsService;

    public function __construct()
    {
        $this->middleware('auth');
        $this->applicationsService = app(ApplicationService::class);
    }

    public function index()
    {
        $applications = $this->applicationsService->getPaginatedApplication();
        return view('admin.applications.index', compact('applications'));
    }

    public function done(int $id)
    {
        return $this->applicationsService->done($id);
    }

    public function destroy($id)
    {
        return $this->applicationsService->deleteData($id);
    }
}
