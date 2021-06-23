<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RolesRequest;
use App\Services\RolesService;

class RolesController extends Controller
{
    protected $teamRolesService;

    /**
     * RolesController constructor.
     */
    public function __construct()
    {
        $this->teamRolesService = app(RolesService::class);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $roles = $this->teamRolesService->getPaginatedTeamRoles();
        return view('admin.team.roles.index', compact('roles'));
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('admin.team.roles.create');
    }

    /**
     * @param RolesRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(RolesRequest $request)
    {
        $data = $request->only('title');
        return $this->teamRolesService->insertData($data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\View\View
     */
    public function edit(int $id)
    {
        $role = $this->teamRolesService->getTeamRole($id);
        return view('admin.team.roles.edit', compact('role'));
    }

    /**
     * @param RolesRequest $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(RolesRequest $request, int $id)
    {
        $data = $request->only('title');
        return $this->teamRolesService->updateData($id, $data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        return $this->teamRolesService->deleteData($id);
    }
}
