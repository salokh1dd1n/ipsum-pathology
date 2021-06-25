<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class AdvantagesRequest extends FormRequest
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
            'advantages.update' => [
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'title.*' => 'required|string|max:250|min:3|unique_translation:advantages,title,'.$this->get('id'),
            ],
            'advantages.store' => [
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'title.*' => 'required|string|max:250|min:3|unique_translation:advantages'
            ],
        ];

        return $rules[$route];
    }

    public function attributes()
    {
        $validationRules = [];
        foreach (Config::get('app.languages') as $key => $lang) {
            $validationRules['title.' . $key] = "Заголовок ($lang)";
        }
        $validationRules['image'] = 'Фото';
        return $validationRules;
    }
}
