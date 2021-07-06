<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class DiseasesRequest extends FormRequest
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
            'diseases.update' => [
                'title.*' => 'required|string|max:250|min:3',
                'description.*' => 'required',
                'symptom_desc.*' => 'required',
                'treatment_desc.*' => 'required',
                'symptom_id' => 'required|exists:symptoms,id',
                'diagnostic_id' => 'required|exists:diagnostics,id',
                'faq_id' => 'required|exists:faqs,id',
            ],

            'diseases.store' => [
                'title.*' => 'required|string|max:250|min:3',
                'description.*' => 'required',
                'symptom_desc.*' => 'required',
                'treatment_desc.*' => 'required',
                'symptom_id' => 'required|exists:symptoms,id',
                'diagnostic_id' => 'required|exists:diagnostics,id',
                'faq_id' => 'required|exists:faqs,id',
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
            $validationRules['symptom_desc.' . $key] = "Описание симптома ($lang)";
            $validationRules['treatment_desc.' . $key] = "Описание лечения ($lang)";
        }
        $validationRules['faq_id'] = 'Часто задаваемые вопросы';
        $validationRules['symptom_id'] = 'Симптомы';
        $validationRules['diagnostic_id'] = 'Диагностика';
        return $validationRules;
    }
}
