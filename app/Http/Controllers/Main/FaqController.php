<?php

namespace App\Http\Controllers\Main;

use App\Services\FaqService;

class FaqController extends CoreController
{
    protected $service;

    /**
     * FaqController constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->service = app(FaqService::class);
    }

    /**
     * All Faq questions and answers page
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        $faqs = $this->service->getAllFaq();
        $tags = $this->service->getRelatedFaqTags($faqs);

        return view('main.pages.faq', compact('faqs', 'tags'));
    }
}
