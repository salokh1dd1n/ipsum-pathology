<?php

namespace Database\Seeders;

use App\Models\Advantage;
use App\Models\Research;
use App\Models\Service;
use Illuminate\Database\Seeder;

class ResearchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $advantages = Advantage::all();
        $services = Service::all();

        Research::factory(5)->create();
        Research::all()->each(function ($research) use ($advantages, $services) {
            $research->advantages()->sync(
                $advantages->random(rand(1, 5))->pluck('id')->toArray()
            );
            $research->services()->sync(
                $services->random(rand(1, 5))->pluck('id')->toArray()
            );
        });
    }
}
