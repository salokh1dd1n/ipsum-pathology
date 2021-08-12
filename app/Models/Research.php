<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Research extends Model
{
    use HasFactory, HasTranslations;

    protected $translatable = ['title', 'short_desc', 'description'];

    protected $fillable = [
        'id',
        'image',
        'title',
        'short_desc',
        'description',
        'position',
    ];

    public function advantages()
    {
        return $this->belongsToMany(Advantage::class, 'research_advantage');
    }

    public function services()
    {
        return $this->belongsToMany(Service::class, 'research_service');
    }
}
