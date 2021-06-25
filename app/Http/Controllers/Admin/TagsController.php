<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TagsRequest;
use App\Services\TagsService;

class TagsController extends Controller
{
    protected $tagsService;

    /**
     * TagsController constructor.
     */
    public function __construct()
    {
        $this->tagsService = app(TagsService::class);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $tags = $this->tagsService->getPaginatedFaqTags();
        return view('admin.faq.tags.index', compact('tags'));
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('admin.faq.tags.create');
    }

    /**
     * @param TagsRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(TagsRequest $request)
    {
        $data = $request->only('title');
        return $this->tagsService->insertData($data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\View\View
     */
    public function edit(int $id)
    {
        $tag = $this->tagsService->getFaqTag($id);
        return view('admin.faq.tags.edit', compact('tag'));
    }

    /**
     * @param TagsRequest $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(TagsRequest $request, int $id)
    {
        $data = $request->only('title');
        return $this->tagsService->updateData($id, $data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        return $this->tagsService->deleteData($id);
    }
}
