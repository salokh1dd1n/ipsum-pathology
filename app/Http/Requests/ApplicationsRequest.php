<?php

namespace App\Http\Requests;

use App\Rules\PhoneNumberRule;
use Illuminate\Foundation\Http\FormRequest;

class ApplicationsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $this->redirect = url()->previous() . '#applicationForm';
        return [
            'fio' => 'required|string|max:250|min:3',
            'phone_number' => ['required', 'string', new PhoneNumberRule()],
        ];
    }

    public function attributes()
    {
        return [
            'fio' => trans('main.applicationForm.fio.definition'),
            'phone_number' => trans('main.applicationForm.phoneNumber.definition'),
        ];
    }
}
