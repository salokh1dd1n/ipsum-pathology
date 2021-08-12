<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Advantage;
use App\Models\Application;
use App\Models\Clinic;
use App\Models\Diagnostic;
use App\Models\News;
use App\Models\Service;
use App\Models\Symptom;
use App\Models\Tags;
use App\Models\Team;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Admin::factory(1)->create();
        News::factory(5)->create();
        Team::factory(5)->create();
        Clinic::factory(5)->create();
        Application::factory(5)->create();
        Tags::factory(5)->create();
        $this->call(FaqSeeder::class);
        Advantage::factory(5)->create();
        Service::factory(5)->create();
        $this->call(ResearchSeeder::class);
        Symptom::factory(5)->create();
        Diagnostic::factory(5)->create();
        $this->call(DiseaseSeeder::class);

    }
}
