<?php

namespace Database\Factories;

use App\Models\Diagnostic;

class DiagnosticFactory extends CoreFactory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Diagnostic::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $attributes['title'] = $this->multiLang($this->faker->text(30));
        $attributes['description'] = $this->multiLang($this->description());
        $attributes['price'] = $this->price();

        return $attributes;
    }
}
