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

Route::get('/', [\App\Http\Controllers\Admin\ApplicationsController::class, 'index'])->name('dashboard');

Route::resource('news', \App\Http\Controllers\Admin\NewsController::class)
    ->except('show');

Route::resource('team', \App\Http\Controllers\Admin\TeamController::class)
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

Route::resource('diseases', \App\Http\Controllers\Admin\DiseasesController::class)
    ->except('show');

Route::resource('symptoms', \App\Http\Controllers\Admin\SymptomsController::class)
    ->except('show');

Route::resource('diagnostics', \App\Http\Controllers\Admin\DiagnosticsController::class)
    ->except('show');

Route::resource('clinics', \App\Http\Controllers\Admin\ClinicsController::class)
    ->except('show');

Route::get('/applications', [\App\Http\Controllers\Admin\ApplicationsController::class, 'index'])->name('applications.index');
Route::patch('/applications/{id}', [\App\Http\Controllers\Admin\ApplicationsController::class, 'done'])->name('applications.done');
Route::delete('/applications/{id}', [\App\Http\Controllers\Admin\ApplicationsController::class, 'destroy'])->name('applications.destroy');

Route::post('ckeditor/image_upload', [\App\Http\Controllers\Admin\CkeditorController::class, 'upload'])->name('upload');

