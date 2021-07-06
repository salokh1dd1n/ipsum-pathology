<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class ResearchRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $route = $this->route()->getName();

        $rules = [
            'researches.update' => [
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'title.*' => 'required|string|max:250|min:3|unique_translation:research,title,'.$this->get('id'),
                'service_id' => 'required|exists:services,id',
                'advantage_id' => 'required|exists:advantages,id',
                'short_desc.*' => 'required',
                'description.*' => 'required'
            ],

            'researches.store' => [
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'title.*' => 'required|string|max:250|min:3|unique_translation:research',
                'service_id' => 'required|exists:services,id',
                'advantage_id' => 'required|exists:advantages,id',
                'short_desc.*' => 'required',
                'description.*' => 'required'
            ],
        ];

        return $rules[$route];
    }

    public function attributes()
    {
        $attributes = [];
        foreach (Config::get('app.languages') as $key => $lang) {
            $attributes['title.' . $key] = "Заголовок ($lang)";
            $attributes['description.' . $key] = "Описание ($lang)";
            $attributes['short_desc.' . $key] = "Краткое описание ($lang)";
        }
        $attributes['image'] = 'Фото';
        $attributes['service_id'] = 'Услуги';
        $attributes['advantage_id'] = 'Преимущества';
        return $attributes;
    }
}
