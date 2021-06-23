<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TeamRequest;
use App\Services\TeamService;

class TeamController extends Controller
{
    protected $teamService;

    /**
     * TeamController constructor.
     */
    public function __construct()
    {
        $this->teamService = app(TeamService::class);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $team = $this->teamService->getPaginatedTeam();
        return view('admin.team.index', compact('team'));
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        $roles = $this->teamService->getAllTeamRoles();
        return view('admin.team.create', compact('roles'));
    }

    public function store(TeamRequest $request)
    {
        $file = $request->file('image');
        $data = $request->only('phone_number', 'name', 'role_id', 'description');

        return $this->teamService->insertDataWithImage($file, $data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\View\View
     */
    public function edit(int $id)
    {
        $member = $this->teamService->getMember($id);
        $roles = $this->teamService->getAllTeamRoles();
        return view('admin.team.edit', compact('member', 'roles'));
    }

    /**
     * @param TeamRequest $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(TeamRequest $request, int $id)
    {
        $file = $request->file('image');
        $data = $request->only('phone_number', 'name', 'role_id', 'description');

        return $this->teamService->updateDataWithImage($id, $file, $data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        return $this->teamService->deleteData($id);
    }
}
