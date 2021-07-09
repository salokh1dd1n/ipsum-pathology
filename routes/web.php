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
Route::get('/', function () {
    return redirect(app()->getLocale());
});
// Routes without locale
Route::post('/application/store', [\App\Http\Controllers\Main\HomeController::class, 'storeApplication'])->name('application.store');

//Routes with locale
Route::group($settings, function () {
    Route::get('/', [\App\Http\Controllers\Main\HomeController::class, 'index'])->name('index');
    Route::get('/treatments', [\App\Http\Controllers\Main\DiseasesController::class, 'index'])->name('treatments');
    Route::get('/treatments/{id}', [\App\Http\Controllers\Main\DiseasesController::class, 'show'])->name('treatments.show');
});
