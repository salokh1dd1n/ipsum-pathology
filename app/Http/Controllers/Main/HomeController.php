<?php

namespace App\Http\Controllers\Main;

use App\Services\NewsService;
use App\Services\TeamService;

class HomeController extends CoreController
{
    protected $newsService;
    protected $teamService;

    /**
     * HomeController constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->newsService = app(NewsService::class);
        $this->teamService = app(TeamService::class);
    }

    /**
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        $news = $this->newsService->getAllNews(5);
        $team = $this->teamService->getAllTeam(5);
        return view('main.pages.home', compact('news', 'team'));
    }

}
