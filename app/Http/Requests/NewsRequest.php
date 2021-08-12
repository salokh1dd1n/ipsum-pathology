<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class NewsRequest extends FormRequest
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
            'news.update' => [
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'title.*' => 'required|string|max:250|min:3|unique_translation:news,title,' . $this->get('id'),
                'description.*' => 'required|',
            ],
            'news.store' => [
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'title.*' => 'required|string|max:250|min:3|unique_translation:news',
                'description.*' => 'required|'
            ],
            'news.setPosition' => [
                'position' => 'integer',
            ]
        ];
        return $rules[$route];

    }

    public function attributes()
    {
        $validationRules = [];
        foreach (Config::get('app.languages') as $key => $lang) {
            $validationRules['title.' . $key] = "Заголовок ($lang)";
            $validationRules['description.' . $key] = "Описание ($lang)";
        }
        $validationRules['image'] = 'Фото';
        return $validationRules;
    }

}
