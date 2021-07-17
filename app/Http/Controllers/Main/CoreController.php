<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApplicationsRequest;
use App\Services\ApplicationService;

class CoreController extends Controller
{
    protected $applicationService;

    /**
     * CoreController constructor.
     */
    public function __construct()
    {
        $this->applicationService = app(ApplicationService::class);
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

}
