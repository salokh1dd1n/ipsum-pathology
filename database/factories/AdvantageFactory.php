<?php

namespace Database\Factories;

use App\Models\Advantage;

class AdvantageFactory extends CoreFactory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Advantage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $attributes['image'] = $this->image();
        $attributes['title'] = $this->multiLang($this->title());

        return $attributes;
    }
}
