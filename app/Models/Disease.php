<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Disease extends Model
{
    use HasFactory, HasTranslations;

    /**
     * @var string[]
     */
    protected $translatable = [
        'title',
        'description',
        'symptom_desc',
        'treatment_desc',
    ];

    /**
     * @var string[]
     */
    protected $fillable = [
        'image',
        'title',
        'description',
        'symptom_desc',
        'treatment_desc',
        'position',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function symptoms()
    {
        return $this->belongsToMany(Symptom::class, 'diseases_symptoms');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function diagnostics()
    {
        return $this->belongsToMany(Diagnostic::class, 'diseases_diagnostics');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function faq()
    {
        return $this->belongsToMany(Faq::class, 'diseases_faqs')->with('tags:id,title');
    }
}
