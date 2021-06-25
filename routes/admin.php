<?php


use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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

Auth::routes();

Route::get('/', [\App\Http\Controllers\Admin\HomeController::class, 'index']);
Route::get('/dashboard', [\App\Http\Controllers\Admin\HomeController::class, 'index'])->name('dashboard');

//Route::get('/news', [NewsController::class, 'index'])->name('news');
//Route::get('/news/create', [NewsController::class, 'index'])->name('news');
Route::resource('news', \App\Http\Controllers\Admin\NewsController::class)
    ->except('show');

Route::resource('team', \App\Http\Controllers\Admin\TeamController::class)
    ->except('show');

Route::resource('roles', \App\Http\Controllers\Admin\RolesController::class)
    ->except('show');

Route::resource('faq', \App\Http\Controllers\Admin\FaqController::class)
    ->except('show');

Route::resource('tags', \App\Http\Controllers\Admin\TagsController::class)
    ->except('show');

Route::resource('clinics', \App\Http\Controllers\Admin\ClinicsController::class)
    ->except('show');

Route::resource('researches', \App\Http\Controllers\Admin\ResearchesController::class)
    ->except('show');

Route::resource('advantages', \App\Http\Controllers\Admin\AdvantagesController::class)
    ->except('show');

Route::resource('services', \App\Http\Controllers\Admin\ServiceController::class)
    ->except('show');

Route::post('ckeditor/image_upload', [\App\Http\Controllers\Admin\CkeditorController::class, 'upload'])->name('upload');

