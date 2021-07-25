<?php

namespace App\Services;


use App\Repositories\ClinicsRepository;
use Yandex\Geocode\Api;

class ClinicsService extends CoreService
{
    protected object $repository;
    protected $yandexApi;

    /**
     * TeamService constructor.
     * @param ClinicsRepository $repository
     * @param string $prefix
     */
    public function __construct(ClinicsRepository $repository, $prefix = 'clinics')
    {
        parent::__construct($repository, $prefix);
        $this->repository = $repository;
        $this->yandexApi = app(Api::class);

    }

    public function getAllClinics()
    {
        return $this->repository->getAllClinics()->get();
    }
    public function getPaginatedClinics($number)
    {
        $result = $this->repository->getPaginatedClinics($number);

        return $result;
    }


    public function getClinic($id)
    {
        return $this->repository->getClinic($id);
    }

    public function getMultiLangAddress($address)
    {
        $this->yandexApi->setQuery($address);
        $address = [];
        $this->yandexApi->setLang('ru')->setLimit(1)->load();
        $address['ru'] = $this->yandexApi->getResponse()->getData()['Address'];
        $this->yandexApi->setLang('uz')->setLimit(1)->load();
        $address['uz'] = $this->yandexApi->getResponse()->getData()['Address'];
        $this->yandexApi->setLang('en')->setLimit(1)->load();
        $address['en'] = $this->yandexApi->getResponse()->getData()['Address'];

        return $address;
    }

}
