<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
$settings = [
    'prefix' => '{locale}',
    'where' => ['locale' => '[a-zA-Z]{2}'],
    'middleware' => 'setLocale'
];
//Redirect with locale
Route::redirect('/', app()->getLocale(), 301);

// Routes without locale

//Routes with locale
Route::group($settings, function () {
    Route::get('/', [\App\Http\Controllers\Main\CoreController::class, 'index'])->name('index');
    Route::get('/contacts', [\App\Http\Controllers\Main\CoreController::class, 'contacts'])->name('contacts');
    Route::get('/aboutUs', [\App\Http\Controllers\Main\CoreController::class, 'aboutUs'])->name('aboutUs');

    Route::get('/team', [\App\Http\Controllers\Main\TeamController::class, 'index'])->name('team');
    Route::get('/faq', [\App\Http\Controllers\Main\FaqController::class, 'index'])->name('faq');

    Route::post('/application/store', [\App\Http\Controllers\Main\CoreController::class, 'storeApplication'])->middleware(['throttle:storeApplication'])->name('application.store');

    Route::get('/news', [\App\Http\Controllers\Main\NewsController::class, 'index'])->name('news');
    Route::get('/news/{id}', [\App\Http\Controllers\Main\NewsController::class, 'show'])->name('news.show');

    Route::get('/treatments', [\App\Http\Controllers\Main\DiseasesController::class, 'index'])->name('treatments');
    Route::get('/treatments/{id}', [\App\Http\Controllers\Main\DiseasesController::class, 'showTreatment'])->name('treatments.show');

    Route::get('/diagnostics', [\App\Http\Controllers\Main\DiseasesController::class, 'index'])->name('diagnostics');
    Route::get('/diagnostics/{id}', [\App\Http\Controllers\Main\DiseasesController::class, 'showDiagnostics'])->name('diagnostics.show');

    Route::get('/researches', [\App\Http\Controllers\Main\ResearchesController::class, 'index'])->name('researches');
    Route::get('/research/{id}', [\App\Http\Controllers\Main\ResearchesController::class, 'show'])->name('researches.show');

    Route::get('/doctors', [\App\Http\Controllers\Main\ClinicsController::class, 'index'])->name('doctors');
});
