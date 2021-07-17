<?php

namespace App\Http\Controllers\Main;

use App\Services\NewsService;

class NewsController extends CoreController
{
    protected $service;

    public function __construct()
    {
        parent::__construct();
        $this->service = app(NewsService::class);
    }

    public function index()
    {
        $news = $this->service->getPaginatedNews(6);
        return view('main.pages.news', compact('news'));
    }

    public function show($lang, $id)
    {
        dd(__METHOD__, $id);
    }
}
