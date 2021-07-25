<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Storage;

abstract class CoreFactory extends Factory
{

    abstract public function definition();

    protected function image()
    {
        Storage::makeDirectory('uploads/images');
        return $this->faker->image('public/storage/uploads/images', 640, 480, null, false);
    }

    protected function title()
    {
        return $this->faker->text(50);
    }


    protected function description()
    {
        return $this->faker->text(100);
    }

    protected function descriptionHTML()
    {
        $start = $this->faker->text(400);
        $middle = "<strong>{$this->faker->text(30)}</strong>";
        $end = $this->faker->text(600);
        $result = $start . "<br>" . $middle . "<br>" . $end;
        return $result;
    }

    protected function phone()
    {
        $phone = $this->faker->numberBetween(90, 99) . $this->faker->numberBetween(1000000, 9999999);
        return $phone;
    }

    protected function price()
    {
        return $this->faker->numberBetween(1000, 10000000000);
    }

    protected function multiLang($value)
    {
        $attribute = [];

        foreach (array_keys(Config::get('app.languages')) as $key) {
            $attribute[$key] = $value;
        }
        return $attribute;
    }

}
