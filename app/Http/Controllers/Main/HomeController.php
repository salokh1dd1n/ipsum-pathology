<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApplicationsRequest;
use App\Rules\PhoneNumberRule;
use App\Services\ApplicationService;
use App\Services\NewsService;
use App\Services\TeamService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class HomeController extends Controller
{
    protected $newsService;
    protected $teamService;
    protected $applicationService;

    public function __construct()
    {
        $this->newsService = app(NewsService::class);
        $this->teamService = app(TeamService::class);
        $this->applicationService = app(ApplicationService::class);
    }

    public function index(Request $request)
    {
        $news = $this->newsService->getAllNews(5);
        $team = $this->teamService->getAllTeam(5);
        return view('main.pages.home', compact('news', 'team'));
    }

    public function storeApplication(ApplicationsRequest $request)
    {
        $data = $request->only('fio');
        $phone_number = $request->input('phone_number');
        $data['phone_number'] = reFormatPhoneNumber($phone_number);

        return $this->applicationService->insertData($data);
    }
}
