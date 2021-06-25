<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Faq extends Model
{
    use HasFactory, HasTranslations;

    protected $translatable = ['title', 'description'];

    protected $fillable = [
        'id',
        'title',
        'description',
    ];

    public function tags()
    {
        return $this->belongsToMany(Tags::class, 'faq_tag');
    }
}
