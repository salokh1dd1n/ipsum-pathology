<?php

namespace App\Http\Requests;

use App\Rules\PhoneNumberRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class ClinicsRequest extends FormRequest
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
        $rules = [
            'phone_number' => ['required', 'string', new PhoneNumberRule()],
            'title.*' => 'required|string|max:250|min:3',
            'address' => 'required|string|max:250|min:3'
        ];

        return $rules;
    }

    public function attributes()
    {
        $attributes = [];
        foreach (Config::get('app.languages') as $key => $lang) {
            $attributes['title.' . $key] = "Заголовок ($lang)";
        }
        $attributes['address'] = "Адрес";
        $attributes['phone_number'] = 'Телефонный номер';
        return $attributes;
    }
}
