<?php

namespace Database\Factories;

use App\Models\Clinic;
use Illuminate\Database\Eloquent\Factories\Factory;
use Yandex\Geocode\Api;

class ClinicFactory extends CoreFactory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Clinic::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $addressData = $this->faker->unique()->randomElement($this->getDataFromYandexApi());
        $attributes['phone_number'] = $this->phone();
        $attributes['title'] = $this->multiLang($this->title());
        $attributes['address'] = $this->multiLang($addressData['address']);
        $attributes['latitude'] = $addressData['latitude'];
        $attributes['longitude'] = $addressData['longitude'];

        return $attributes;
    }

    public function getDataFromYandexApi()
    {
        $address = [
            'Oʻzbekiston, Toshkent, Gulobod ko\'chasi, 72',
            '100000, Узбекистан, Ташкент, ул. Абая, 13А',
            'г. Ташкент, ул. Шота Руставели, 35/1',
            'г. Ташкент, Чиланзарский район, проспект Бунёдкор, 41',
            'г. Ташкент, Чиланзарский район, ул. Богистон, дом 1',
        ];
        $data = [];
        foreach ($address as $key => $addressItem) {
            $api = new Api();
            $api->setQuery($addressItem);
            $api->setLang(app()->getLocale())->setLimit(1)->load();
            $yandexResponse = $api->getResponse()->getData();
            $data[$key]['address'] = $yandexResponse['Address'];
            $data[$key]['latitude'] = $yandexResponse['Latitude'];
            $data[$key]['longitude'] = $yandexResponse['Longitude'];
        }

        return $data;
    }
}
