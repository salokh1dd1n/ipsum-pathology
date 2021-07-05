<?php

namespace Database\Factories;

use App\Models\Disease;

class DiseaseFactory extends CoreFactory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Disease::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $attributes['title'] = $this->multiLang($this->title());
        $attributes['symptom_desc'] = $this->multiLang($this->faker->text(250));
        $attributes['treatment_desc'] = $this->multiLang($this->faker->text(250));
        $attributes['description'] = $this->multiLang($this->descriptionHTML());
        return $attributes;
    }
}
