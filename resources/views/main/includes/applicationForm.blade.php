@if ($message = Session::get('applicationMsg'))
    <div class="form__notification _show">
        <div class="form__notification-sended">
            <p>{{ $message }}</p>
            <button class="form__notification-close-btn" type="button">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>
                    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>
                </svg>
            </button>
        </div>
    </div>
@endif
<section class="form" id="applicationForm">
    <div class="uk-container uk-container-center">
        <div class="form__wrapper">
            <form class="form__fields" action="{{ route('application.store', app()->getLocale()) }}" method="POST">
                @csrf
                <fieldset class="uk-fieldset form__content">
                    <label class="uk-form-label form__title">@lang('main.applicationForm.haveQuestions')</label>
                    <label
                        class="uk-form-label form__subtitle">@lang('main.applicationForm.callOrSendApplication')</label>
                    <div class="uk-margin form__inputs uk-flex uk-flex-center">
                        <div class="form__input-name uk-width-expand">
                            <input class="uk-input form__input" id="fio" name="fio"
                                   placeholder="@lang('main.applicationForm.fio.placeholder')"
                                   type="text" value="{{ old('fio') }}">
                            @error('fio')
                            <div class="form__input-error _error">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="form__input-tel uk-width-expand">
                            <input class="uk-input form__input" id="tel"
                                   name="phone_number"
                                   placeholder="@lang('main.applicationForm.phoneNumber.placeholder')" type="tel"
                                   value="{{ old('phone_number') }}">
                            @error('phone_number')
                            <div class="form__input-error _error">{{ $message }}</div>
                            @enderror
                        </div>
                        <button class="uk-button uk-button-default form__btn"
                                type="submit">@lang('main.applicationForm.submit')</button>
                        @isset($isModal)
                            <button class="form__close" type="button">
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>
                                    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>
                                </svg>
                            </button>
                        @endisset
                    </div>
                </fieldset>
            </form>
            @if (!isset($isModal))
                <span class="form__background"></span>
            @endif
        </div>
    </div>
    @if (!isset($isModal))
        <picture>
            <img src="{{ asset('main/img/longArm.png') }}" alt="" class="form__background-arm">
        </picture>
    @endif
</section>
