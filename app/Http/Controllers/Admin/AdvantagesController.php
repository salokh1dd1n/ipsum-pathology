<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdvantagesRequest;
use App\Services\AdvantagesService;

class AdvantagesController extends Controller
{
    protected $advantagesService;

    /**
     * AdvantagesController constructor.
     */
    public function __construct()
    {
        $this->advantagesService = app(AdvantagesService::class);
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $advantages = $this->advantagesService->getPaginatedAdvantages();
        return view('admin.researches.advantages.index', compact('advantages'));
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('admin.researches.advantages.create');
    }

    /**
     * @param AdvantagesRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(AdvantagesRequest $request)
    {
        $data = $request->only('title');
        $file = $request->file('image');
        return $this->advantagesService->insertDataWithImage($file, $data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Contracts\View\View
     */
    public function edit(int $id)
    {
        $advantage = $this->advantagesService->getAdvantage($id);
        return view('admin.researches.advantages.edit', compact('advantage'));
    }

    /**
     * @param AdvantagesRequest $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(AdvantagesRequest $request, int $id)
    {
        $data = $request->only('title');
        $file = $request->file('image');
        return $this->advantagesService->updateDataWithImage($id, $file, $data);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        return $this->advantagesService->deleteData($id);
    }


}
