<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsRequest;
use App\Services\NewsService;

class NewsController extends Controller
{
    protected $newsService;

    /**
     * NewsController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->newsService = app(NewsService::class);
    }


    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $news = $this->newsService->getPaginatedNews(10);
        return view('admin.news.index', compact('news'));
    }


    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('admin.news.create');
    }


    /**
     * @param NewsRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(NewsRequest $request)
    {

        $file = $request->file('image');
        $data = $request->only('title', 'description');
        $result = $this->newsService->insertDataWithImage($file, $data);

        return $result;

    }


    /**
     * @param int $id
     * @return \Illuminate\Contracts\View\View
     */
    public function edit(int $id)
    {
        $newsItem = $this->newsService->getNews($id);
        return view('admin.news.edit', compact('newsItem'));
    }


    /**
     * @param NewsRequest $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(NewsRequest $request, int $id)
    {
        $file = $request->file('image');
        $data = $request->only('title', 'description');
        $result = $this->newsService->updateDataWithImage($id, $file, $data);

        return $result;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        return $this->newsService->deleteData($id);
    }

}
