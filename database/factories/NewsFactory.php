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
        $images = [];
        for ($i = 1; $i <= 5; $i = $i + 2) {
            $images[] = 'news' . $i . '.png';
        }
        $attributes['title'] = $this->multiLang($this->title());
        $attributes['short_desc'] = $this->multiLang($this->title());
        $attributes['description'] = $this->multiLang($this->descriptionHTML());
        $attributes['image'] = $this->faker->randomElement($images);
//        $attributes['image'] = $this->image();

        return $attributes;
    }

}
