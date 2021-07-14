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
}
