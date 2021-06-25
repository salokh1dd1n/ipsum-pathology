<?php

namespace App\Http\Requests;

use App\Rules\PhoneNumberRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class TeamRequest extends FormRequest
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
            'team.update' => [
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'name.*' => 'required|string|max:250|min:3',
                'description.*' => 'required',
                'role_id' => 'exists:roles,id|nullable',
                'phone_number' => ['required', new PhoneNumberRule],
            ],

            'team.store' => [
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'name.*' => 'required|string|max:250|min:3',
                'description.*' => 'required',
                'role_id' => 'exists:roles,id|nullable',
                'phone_number' => ['required', new PhoneNumberRule],
            ],
        ];
        return $rules[$route];
    }

    public function attributes()
    {
        $validationRules = [];
        foreach (Config::get('app.languages') as $key => $lang) {
            $validationRules['name.' . $key] = "ФИО ($lang)";
            $validationRules['description.' . $key] = "Описание ($lang)";
        }
        $validationRules['image'] = 'Фото';
        $validationRules['role_id'] = 'Роль';
        $validationRules['phone_number'] = 'Телефонный номер';
        return $validationRules;
    }
}
