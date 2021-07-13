<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApplicationsRequest;
use App\Services\ApplicationService;
use App\Services\FaqService;
use App\Services\NewsService;
use App\Services\TeamService;

class HomeController extends Controller
{
    protected $newsService;
    protected $teamService;
    protected $faqService;
    protected $applicationService;

    public function __construct()
    {
        $this->newsService = app(NewsService::class);
        $this->teamService = app(TeamService::class);
        $this->faqService = app(FaqService::class);
        $this->applicationService = app(ApplicationService::class);
    }

    public function index()
    {
        $news = $this->newsService->getAllNews(5);
        $team = $this->teamService->getAllTeam(5);
        return view('main.pages.home', compact('news', 'team'));
    }

    public function team()
    {
        $team = $this->teamService->getPaginatedTeam(6);
        return view('main.pages.team', compact('team'));
    }

    public function faq()
    {
        $faqs = $this->faqService->getAllFaq();
        $tags = $this->faqService->getRelatedFaqTags($faqs);

        return view('main.pages.faq', compact('faqs', 'tags'));
    }

    public function storeApplication(ApplicationsRequest $request, $lang)
    {
        $data = $request->only('fio');
        $phone_number = $request->input('phone_number');
        $data['phone_number'] = reFormatPhoneNumber($phone_number);

        return $this->applicationService->insertApplicationData($data, $lang);
    }
}
