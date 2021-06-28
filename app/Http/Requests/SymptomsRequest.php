<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class SymptomsRequest extends FormRequest
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

            'symptoms.update' => [
                'title.*' => 'required|string|max:250|min:3|unique_translation:symptoms,title,' . $this->get('id'),
                'description.*' => 'required'
            ],

            'symptoms.store' => [
                'title.*' => 'required|string|max:250|min:3|unique_translation:symptoms',
                'description.*' => 'required'
            ]

        ];

        return $rules[$route];
    }

    public function attributes()
    {
        $attributes = [];
        foreach (Config::get('app.languages') as $key => $lang) {
            $attributes['title.' . $key] = "Заголовок ($lang)";
            $attributes['description.' . $key] = "Описание ($lang)";
        }
        return $attributes;
    }
}
