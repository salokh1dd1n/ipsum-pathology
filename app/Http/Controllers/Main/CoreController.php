<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApplicationsRequest;
use App\Services\ApplicationService;
use App\Services\NewsService;
use App\Services\TeamService;

class CoreController extends Controller
{
    protected $applicationService;
    protected $teamService;
    protected $newsService;

    /**
     * CoreController constructor.
     */
    public function __construct()
    {
        $this->applicationService = app(ApplicationService::class);
        $this->teamService = app(TeamService::class);
        $this->newsService = app(NewsService::class);
    }

    /**
     * Home page
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        $news = $this->newsService->getAllNews(5);
        $team = $this->teamService->getAllTeam(5);
        return view('main.pages.home', compact('news', 'team'));
    }

    /**
     * Application store
     *
     * @param ApplicationsRequest $request
     * @param string $lang
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */
    public function storeApplication(ApplicationsRequest $request)
    {
        $data = $request->only('fio');
        $phone_number = $request->input('phone_number');
        $data['phone_number'] = reFormatPhoneNumber($phone_number);
        return $this->applicationService->insertApplicationData($data);
    }

    /**
     * Contacts page
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function contacts()
    {
        return view('main.pages.contacts');
    }

    /**
     * About Us page
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function aboutUs()
    {
        $team = $this->teamService->getAllTeam(4);
        return view('main.pages.aboutUs', compact('team'));
    }

}
