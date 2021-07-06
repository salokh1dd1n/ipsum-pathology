<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class FaqRequest extends FormRequest
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
            'faq.update' => [
                'title.*' => 'required|string|max:250|min:3',
                'tag_id' => 'exists:tags,id|nullable',
                'description.*' => 'required'
            ],

            'faq.store' => [
                'title.*' => 'required|string|max:250|min:3',
                "tag_id" => "exists:tags,id|nullable",
                'description.*' => 'required'
            ],
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
        $validationRules['tag_id'] = 'Теги';
        return $validationRules;
    }
}
