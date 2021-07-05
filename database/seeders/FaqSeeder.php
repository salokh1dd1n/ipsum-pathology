<?php

namespace Database\Seeders;

use App\Models\Faq;
use App\Models\Tags;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = Tags::all();
        Faq::factory(5)->create();
        Faq::all()->each(function ($faq) use ($tags){
            $faq->tags()->sync(
                $tags->random(rand(1, 5))->pluck('id')->toArray()
            );
        });
    }
}
