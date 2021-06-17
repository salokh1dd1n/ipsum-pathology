<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsRequest;
use App\Http\Requests\NewsUpdateRequest;
use App\Services\NewsService;

class NewsController extends Controller
{
    protected $newsService;
    protected $redirectRoute;

    public function __construct()
    {
        $this->newsService = app(NewsService::class);
        $this->redirectRoute = 'news.index';
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = $this->newsService->getPaginatedNews();
        return view('admin.news.index', compact('news'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.news.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(NewsRequest $request)
    {

        $file = $request->file('image');
        $data = $request->only('title', 'description');
        $result = $this->newsService->insertNewsData($file, $data);

        return $result;

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\News $news
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $newsItem = $this->newsService->getNews($id);
        return view('admin.news.edit', compact('newsItem'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\News $news
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(NewsUpdateRequest $request, $id)
    {
        $file = $request->file('image');
        $data = $request->only('title', 'description');
        $result = $this->newsService->updateNewsData($id, $file, $data);

        return $result;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\News $news
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->newsService->deleteNewsData($id);
    }

}
