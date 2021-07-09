<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class News extends Model
{
    use HasFactory, HasTranslations;

    protected $translatable = ['title', 'description', 'short_desc'];

    protected $fillable = [
        'title',
        'slug',
        'image',
        'short_desc',
        'description',
    ];

    public function getPublishedAtAttribute()
    {
        $result = Carbon::parse($this->created_at)->format('d-m-Y');
        return $result;
    }
}
