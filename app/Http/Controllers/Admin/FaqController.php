<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\FaqRequest;
use App\Services\FaqService;

class FaqController extends Controller
{
    protected $faqService;

    /**
     * FaqController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->faqService = app(FaqService::class);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $faqs = $this->faqService->getPaginatedFaq();
        return view('admin.faq.index', compact('faqs'));
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        $tags = $this->faqService->getAllFaqTags();
        return view('admin.faq.create', compact('tags'));
    }

    /**
     * @param FaqRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(FaqRequest $request)
    {
        $data = $request->only('title', 'description');
        $tags = $request->input('tag_id');
        return $this->faqService->insertFaqData($data, $tags);
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\View\View
     */
    public function edit(int $id)
    {
        $faq = $this->faqService->getFAQ($id);
        $tags = $this->faqService->getAllFaqTags();
        return view('admin.faq.edit', compact('faq', 'tags'));
    }

    /**
     * @param FaqRequest $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(FaqRequest $request, int $id)
    {
        $data = $request->only('title', 'description');
        $tags = $request->input('tag_id');
        return $this->faqService->updateFaqData($id, $data, $tags);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        return $this->faqService->deleteData($id);
    }

}
