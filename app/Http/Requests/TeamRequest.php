<?php

namespace App\Http\Requests;

use App\Rules\PhoneNumberRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

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
                'role_id' => '',
                'phone_number' => ['required', new PhoneNumberRule],
            ],

            'team.store' => [
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'name.*' => 'required|string|max:250|min:3',
                'role_id' => '',
                'phone_number' => ['required', new PhoneNumberRule],
            ],
        ];
        return $rules[$route];
    }
}
