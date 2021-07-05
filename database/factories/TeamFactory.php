<?php

namespace Database\Factories;

use App\Models\Team;

class TeamFactory extends CoreFactory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Team::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $attributes['image'] = $this->image();
        $attributes['phone_number'] = $this->phone();
        $attributes['name'] = $this->multiLang($this->faker->name);
        $attributes['role'] = $this->multiLang($this->faker->text(10));
        $attributes['description'] = $this->multiLang($this->description());

        return $attributes;
    }
}
