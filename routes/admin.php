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

//Auth::routes();

Route::get('/login', [\App\Http\Controllers\Auth\LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'login']);
Route::post('/logout', [\App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');

Route::get('/', [\App\Http\Controllers\Admin\ApplicationsController::class, 'index'])->name('dashboard');

Route::resource('news', \App\Http\Controllers\Admin\NewsController::class)
    ->except('show');
Route::patch('/news/{news}/setPosition', [\App\Http\Controllers\Admin\NewsController::class, 'setPosition'])->name('news.setPosition');

Route::resource('team', \App\Http\Controllers\Admin\TeamController::class)
    ->except('show');
Route::patch('/team/{team}/setPosition', [\App\Http\Controllers\Admin\TeamController::class, 'setPosition'])->name('team.setPosition');

Route::resource('faq', \App\Http\Controllers\Admin\FaqController::class)
    ->except('show');
Route::patch('/faq/{faq}/setPosition', [\App\Http\Controllers\Admin\FaqController::class, 'setPosition'])->name('faq.setPosition');

Route::resource('tags', \App\Http\Controllers\Admin\TagsController::class)
    ->except('show');

Route::resource('clinics', \App\Http\Controllers\Admin\ClinicsController::class)
    ->except('show');
Route::patch('/clinics/{clinics}/setPosition', [\App\Http\Controllers\Admin\ClinicsController::class, 'setPosition'])->name('clinics.setPosition');

Route::resource('researches', \App\Http\Controllers\Admin\ResearchesController::class)
    ->except('show');
Route::patch('/researches/{researches}/setPosition', [\App\Http\Controllers\Admin\ResearchesController::class, 'setPosition'])->name('researches.setPosition');

Route::resource('advantages', \App\Http\Controllers\Admin\AdvantagesController::class)
    ->except('show');

Route::resource('services', \App\Http\Controllers\Admin\ServiceController::class)
    ->except('show');

Route::resource('diseases', \App\Http\Controllers\Admin\DiseasesController::class)
    ->except('show');
Route::patch('/diseases/{diseases}/setPosition', [\App\Http\Controllers\Admin\DiseasesController::class, 'setPosition'])->name('diseases.setPosition');

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

