<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class NewsUpdateRequest extends FormRequest
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
        return [
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title.*' => 'required|string|max:250|min:3',
            'description.*' => 'required|'
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Поле Заголовок обязательно для заполнения.',
        ];
    }
}
