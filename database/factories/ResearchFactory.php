<?php

namespace Database\Factories;

use App\Models\Research;

class ResearchFactory extends CoreFactory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Research::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $attributes['title'] = $this->multiLang($this->title());
        $attributes['image'] = $this->image();
        $attributes['short_desc'] = $this->multiLang($this->faker->realText(150));
        $attributes['description'] = $this->multiLang($this->description());
        return $attributes;
    }
}
