<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Diagnostic extends Model
{
    use HasFactory, HasTranslations;

    protected $translatable  = ['title', 'description'];

    protected $fillable = ['title', 'description', 'price'];

    public function getFormatedPriceAttribute()
    {
        return number_format($this->price, 0, '', ' ');
    }
}
