<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class DiagnosticsRequest extends FormRequest
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
            'diagnostics.update' => [
                'title.*' => 'required|string|max:250|min:3|unique_translation:diagnostics,title,'.$this->get('id'),
                'description.*' => 'required|',
                'price' => 'required|numeric'
            ],

            'diagnostics.store' => [
                'title.*' => 'required|string|max:250|min:3|unique_translation:diagnostics',
                'description.*' => 'required|',
                'price' => 'required|numeric'
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
        $attributes['price'] = 'Цена';
        return $attributes;
    }
}
