<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Team extends Model
{
    use HasFactory, HasTranslations;

    protected $translatable = ['name', 'description', 'role'];

    protected $fillable = [
        'name',
        'role',
        'phone_number',
        'description',
        'image'
    ];
}
