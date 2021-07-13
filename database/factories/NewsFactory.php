<?php

namespace Database\Factories;

use App\Models\News;

class NewsFactory extends CoreFactory
{

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = News::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $attributes['title'] = $this->multiLang($this->title());
        $attributes['description'] = $this->multiLang($this->descriptionHTML());
        $attributes['image'] = $this->image();

        return $attributes;
    }

}
