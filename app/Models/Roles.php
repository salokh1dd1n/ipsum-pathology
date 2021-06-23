<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Roles extends Model
{
    use HasFactory, HasTranslations;
    protected $translatable = ['title'];

    protected $fillable = [
        'id',
        'title'
    ];

    public function members()
    {
        return $this->hasMany(Team::class);
    }
}
