<section class="form" id="applicationForm">
    <div class="uk-container uk-container-center">
        <div class="form__wrapper">
            <form class="form__fields" action="{{ route('application.store', app()->getLocale()) }}" method="POST">
                @csrf
                <fieldset class="uk-fieldset form__content">
                    <div class="form__content-notifications">
                        @if ($message = Session::get('applicationMsg'))
                            <div class="form__input-sended _sended">{{ $message }}</div>
                        @endif
                    </div>
                    <label class="uk-form-label form__title">Остались вопросы, но нет ответов?</label>
                    <label class="uk-form-label form__subtitle">Свяжитесь с нами по телефону +998 (**) *** ** **
                        или оставьте заявку</label>
                    <div class="uk-margin form__inputs uk-flex uk-flex-center">
                        <div class="form__input-name uk-width-1-3 uk-margin-small-right">
                            <input class="uk-input form__input" id="fio" name="fio" placeholder="Имя"
                                   type="text" value="{{ old('fio') }}">
                            @error('fio')
                            <div class="form__input-error _error">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="form__input-tel uk-width-1-3 uk-margin-small-right">
                            <input class="uk-input form__input" id="tel"
                                   name="phone_number" placeholder="Телефон: +998(__)-___-__-__" type="tel"
                                   value="{{ old('phone_number') }}">
                            @error('phone_number')
                            <div class="form__input-error _error">{{ $message }}</div>
                            @enderror
                        </div>
                        <button class="uk-button uk-button-default form__btn" type="submit">Отправить</button>
                    </div>
                </fieldset>
            </form>
            <span class="form__background"></span>
        </div>
    </div>
    <picture>
        <img src="{{ asset('main/img/longArm.png') }}" alt="" class="form__background-arm"></picture>
</section>
