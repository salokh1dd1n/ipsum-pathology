<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Team extends Model
{
    use HasFactory, HasTranslations;

    protected $translatable = ['name', 'description'];

    protected $fillable = [
        'name',
        'role_id',
        'phone_number',
        'description',
        'image'
    ];

    public function role()
    {
        return $this->belongsTo(Roles::class);
    }
}
