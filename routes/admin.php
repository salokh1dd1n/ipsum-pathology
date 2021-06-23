<?php


use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\CkeditorController;

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

Route::get('/', [HomeController::class, 'index']);
Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');

//Route::get('/news', [NewsController::class, 'index'])->name('news');
//Route::get('/news/create', [NewsController::class, 'index'])->name('news');
Route::resource('news', NewsController::class)
    ->except('show');

Route::resource('team', \App\Http\Controllers\Admin\TeamController::class)
    ->except('show');

Route::resource('roles', \App\Http\Controllers\Admin\RolesController::class)
    ->except('show');

Route::post('ckeditor/image_upload', [CkeditorController::class, 'upload'])->name('upload');

