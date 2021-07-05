<?php

namespace Database\Factories;

use App\Models\Symptom;

class SymptomFactory extends CoreFactory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Symptom::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $attributes['title'] = $this->multiLang($this->faker->text(30));
        $attributes['description'] = $this->multiLang($this->description());

        return $attributes;
    }
}
