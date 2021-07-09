@extends('main.layouts.app')
@section('content')
    <div class="content">
        <section class="intro">
            <div class="uk-container uk-container-center">
                <div class="intro__wrapper uk-width-1-1">
                    <!-- 1st row of table -->
                    <div class="intro__row row__topSection uk-child-width-1-1 uk-child-width-1-3@l" uk-grid>
                        <div class="row__topSection-firstClm row__topSection-clm">
                            <div class="row__topSection-item uk-card uk-card-default uk-card-body">
                                <p>Врачи - кандидаты и доктора наук</p>
                                <picture>
                                    <source srcset="{{ asset('main/img/doctor.webp') }}" type="image/webp">
                                    <img src="{{ asset('main/img/doctor.png') }}" alt=""/></picture>
                            </div>
                        </div>
                        <div class="row__topSection-secondClm row__topSection-clm uk-flex uk-flex-column">
                            <div class="row__topSection-item uk-card uk-card-default uk-card-body uk-height-1-2">
                                <div class="row__topSection-item-content uk-flex uk-flex-bottom">
                                    <h1>22</h1>
                                    <h2>Года</h2>
                                </div>
                                <p>Успешной практики</p>
                            </div>
                            <div class="row__topSection-item uk-card uk-card-default uk-card-body uk-height-1-2">
                                <p>Современное оборудование из Узбекистана</p>
                            </div>
                        </div>
                        <div class="row__topSection-thirdClm row__topSection-clm">
                            <div class="row__topSection-item uk-card uk-card-default uk-card-body">
                                <p>Высокие стандарты качества</p>
                            </div>
                        </div>
                    </div>

                    <!-- background pictures -->
                    <div class="anim__background anim-bg2">
                        <div class="anim__background-mask">
                            <picture>
                                <source srcset="{{ asset('main/img/Mask.webp') }}" type="image/webp">
                                <img src="{{ asset('main/img/Mask.png') }}" alt=""></picture>
                        </div>
                        <div class="anim__background-cloud">
                            <picture>
                                <source srcset="{{ asset('main/img/Cloud.webp') }}" type="image/webp">
                                <img src="{{ asset('main/img/Cloud.png') }}" alt=""></picture>
                        </div>
                        <span class="anim__background-squareP"></span>
                        <span class="anim__background-squareB"></span>
                        <span class="anim__background-rectangle"></span>
                    </div>

                    <!-- Middle Section  -->
                    <div class="intro__row row__middleSection uk-child-width-1-1 uk-child-width-1-2@l" uk-grid>
                        <div class="row__middleSection-Clm">
                            <a href="#">
                                <div class="row__middleSection-item uk-card uk-card-default uk-card-body">
                                    <p>Диагностика Заболеваний</p>
                                </div>
                            </a>
                        </div>

                        <div class="row__middleSection-Clm">
                            <a href="#">
                                <div class="row__middleSection-item uk-card uk-card-default uk-card-body">
                                    <p>Лабораторные Иследования</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- 3rd row intro of table -->
                    <div class="intro__row row__bottomSection uk-child-width-1-1 uk-child-width-1-3@m" uk-grid>
                        <div class="row__bottomSection-Clm">
                            <a href="{{ route('treatments', app()->getLocale()) }}">
                                <div class="row__bottomSection-item uk-card uk-card-default uk-card-body">
                                    <p>Как поставить диагноз и вылечить рак</p>
                                </div>
                            </a>
                        </div>
                        <div class="row__bottomSection-Clm">
                            <a href="#">
                                <div class="row__bottomSection-item uk-card uk-card-default uk-card-body">
                                    <p>К кому обратиться за лечением</p>
                                </div>
                            </a>
                        </div>
                        <div class="row__bottomSection-Clm">
                            <a href="#">
                                <div class="row__bottomSection-item uk-card uk-card-default uk-card-body">
                                    <p>Вопросы пациентов и ответы специалистов</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="form" id="applicationForm">
            <div class="uk-container uk-container-center">
                <div class="form__wrapper">
                    <form class="form__fields" action="{{ route('application.store') }}" method="POST">
                        @csrf
                        <fieldset class="uk-fieldset form__content">
                            <label class="uk-form-label form__title">Остались вопросы, но нет ответов?</label>
                            <label class="uk-form-label form__subtitle">Свяжитесь с нами по телефону +998 9* *** ****
                                или
                                оставьте заявку</label>
                            <div class="uk-margin form__inputs">
                                <input class="uk-input form__input" type="text" placeholder="Имя" name="fio" id="fio">
                                <input class="uk-input form__input" type="tel" placeholder="Телефон: +998(__)-___-__-__"
                                       name="phone_number" id="tel">
                                <button class="uk-button uk-button-default form__btn" type="submit">Отправить</button>
                            </div>
                        </fieldset>
                    </form>
                    <span class="form__background"></span>
                </div>
            </div>
            <picture>
                <source srcset="{{ asset('main/img/longArm.webp') }}" type="image/webp">
                <img src="{{ asset('main/img/longArm.png') }}" alt="" class="form__background-arm"></picture>
        </section>

        <section class="news__swiper">
            <!-- Slider main container -->
            <div class="news__swiper-title">
                Новости
            </div>
            <div class="news__swiper-slider _swiper">
                <!-- Slides -->
                @foreach ($news as $newsItem)
                    <div class="swiper-slide uk-flex uk-flex-center news__swiper-slide">
                        <div class="uk-card uk-card-default uk-card-body uk-flex uk-flex-column uk-flex-middle">
                            <picture>
                                <img src="{{ asset('storage/uploads/images/'.$newsItem->image) }}" alt="">
                            </picture>
                            <a href="#" class="">
                                <h3 class="uk-card-title">{{ $newsItem->getTranslation('title', app()->getLocale()) }}</h3>
                                <p>{{ $newsItem->getTranslation('short_desc', app()->getLocale()) }}</p>
                            </a>
                        </div>
                    </div>
            @endforeach

            <!-- If we need navigation buttons -->
                <!-- <div class="news__swiper-button-prev swiper-button-prev"></div>
                <div class="news__swiper-button-next swiper-button-next"></div> -->

                <!-- If we need scrollbar -->
                <!-- <div class="swiper-scrollbar"></div> -->
            </div>
            <!-- If we need pagination -->
            <div class="news__swiper-pagination swiper-pagination"></div>
        </section>
        <section class="experts__swiper">
            <!-- Slider main container -->
            <div class="experts__swiper-TopB"></div>

            <div class="experts__swiper-title">Доверьтесь профессионалам</div>
            <div class="experts__swiper-slider _swiper">
                <!-- Slides -->
                @foreach ($team as $member)
                    <div class="swiper-slide uk-flex uk-flex-center experts__swiper-slide">
                        <div class="uk-card uk-card-default uk-card-body">
                            <picture>
                                <img src="{{ asset('storage/uploads/images/'.$member->image) }}" alt=""/></picture>
                            <div class="uk-card experts__swiper-content">
                                <div class="experts__swiper-position">{{ $member->getTranslation('role', app()->getLocale()) }}</div>
                                <div class="experts__swiper-name">{{ $member->getTranslation('name', app()->getLocale()) }}</div>
                                <div class="experts__swiper-description">
                                    {{ $member->getTranslation('description', app()->getLocale()) }}
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach

                <!-- If we need navigation buttons -->
                <!-- <div class="experts__swiper-button-prev swiper-button-prev"></div> -->
                <!-- <div class="experts__swiper-button-next swiper-button-next"></div> -->

                <!-- If we need scrollbar -->
                <!-- <div class="swiper-scrollbar"></div> -->
            </div>
            <!-- If we need pagination -->
            <div class="experts__swiper-pagination swiper-pagination"></div>
            <div class="experts__swiper__anim-bg anim-bg">
                <div class="experts__swiper-bg"><span></span></div>
            </div>
            <div class="anim__background anim-bg2">
                <picture>
                    <source srcset="{{ asset('main/img/footerAtom.webp') }}" type="image/webp">
                    <img src="{{ asset('main/img/footerAtom.png') }}" alt="" class="anim__bg-atom"></picture>
            </div>
        </section>

    </div>
@endsection
