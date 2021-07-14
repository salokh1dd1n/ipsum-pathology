<?php

namespace App\Http\Controllers\Main;

use App\Services\TeamService;

class TeamController extends CoreController
{
    protected $service;

    /**
     * TeamController constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->service = app(TeamService::class);
    }

    /**
     * All Team members page
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        $team = $this->service->getPaginatedTeam(6);

        return view('main.pages.team', compact('team'));
    }
}
