<?php

namespace Database\Factories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServiceFactory extends CoreFactory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Service::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $attributes['title'] = $this->multiLang($this->title());
        $attributes['description'] = $this->multiLang($this->description());
        $attributes['price'] = $this->price();
        return $attributes;
    }
}
