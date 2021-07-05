<?php

namespace Database\Seeders;

use App\Models\Diagnostic;
use App\Models\Disease;
use App\Models\Faq;
use App\Models\Symptom;
use Illuminate\Database\Seeder;

class DiseaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faq = Faq::all();
        $symptoms = Symptom::all();
        $diagnostics = Diagnostic::all();
        Disease::factory(5)->create();
        Disease::all()->each(function ($disease) use ($faq, $diagnostics, $symptoms){
            $disease->faq()->sync(
                $faq->random(rand(1, 5))->pluck('id')->toArray()
            );
            $disease->diagnostics()->sync(
                $diagnostics->random(rand(1, 5))->pluck('id')->toArray()
            );
            $disease->symptoms()->sync(
                $symptoms->random(rand(1, 5))->pluck('id')->toArray()
            );
        });
    }
}
