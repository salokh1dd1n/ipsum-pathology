<?php

namespace Database\Factories;

use App\Models\Clinic;
use Illuminate\Database\Eloquent\Factories\Factory;

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
        $attributes['phone_number'] = $this->phone();
        $attributes['title'] = $this->multiLang($this->title());
        $attributes['address'] = $this->multiLang($this->faker->address);

        return $attributes;
    }
}
