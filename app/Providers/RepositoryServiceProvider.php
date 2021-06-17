<?php

namespace App\Providers;

use App\Repositories\CoreRepository;
use App\Repositories\NewsRepository;
use App\Repositories\Interfaces\CoreRepositoryInterface;
use App\Repositories\Interfaces\NewsRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(CoreRepositoryInterface::class, CoreRepository::class);
        $this->app->bind(NewsRepositoryInterface::class, NewsRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
