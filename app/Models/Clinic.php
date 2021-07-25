<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Yandex\Geocode\Api;

class Clinic extends Model
{
    use HasFactory, HasTranslations;

    protected $translatable = ['title', 'address'];
    protected $fillable = ['title', 'address', 'phone_number', 'latitude', 'longitude'];

}
