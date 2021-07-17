@extends('main.layouts.app')
@push('langSwitcher')
    @include('main.includes.langSwitcher')
@endpush
@section('content')
    <div class="content">
        <section class="our-location">
            <div class="uk-container uk-container-center">
                <div class="block__wrapper uk-width-1-1">
                    <!-- Container title -->
                    <h1 class="our-location__title block__title">Контакты</h1>
                    <!-- background pictures -->
                    <div class="anim__background anim-bg2">
                        <div class="anim__background-mask">
                            <picture>
                                <img src="{{ asset('main/img/Mask.png') }}" alt="" width="183px" height="183px"/></picture>
                        </div>
                    </div>

                    <!-- map -->
                    <div class="our-location__map">
                        <div class="our-location__map-wrapper">
                            <script type="text/javascript" charset="utf-8" async
                                    src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A64c297f7e35b8dae3bb81cb67c45ae1923f5314b80559a304bcb95095c74d368&amp;width=100%25&amp;height=100%25&amp;lang=ru_RU&amp;scroll=false"></script>
                        </div>
                        <div class="our-location__map-description desc__map">

                            <div class="desc__map-wrapper uk-child-width-1-1 uk-child-width-1-2@m" uk-grid>
                                <div class="desc__map-content cont__map uk-flex uk-width-1-1 uk-width-1-1@m">
                                    <picture>
                                        <img src="{{ asset('main/img/logo.png') }}" alt=""/></picture>
                                </div>
                                <div class="desc__map-content cont__map uk-flex">
                                    <div class="cont__map-icon">
                                        <picture>
                                            <img src="{{ asset('main/img/location-icon.png') }}"/></picture>
                                    </div>
                                    <div class="cont__map-wrapper">
                                        <div class="cont__map-title">Адрес</div>
                                        <div class="cont__map-text">г.Ташкент. Яккасарайский р-н</div>
                                    </div>
                                </div>
                                <div class="desc__map-content cont__map uk-flex">
                                    <div class="cont__map-icon">
                                        <picture>
                                            <img src="{{ asset('main/img/email-icon.png') }}"/></picture>
                                    </div>
                                    <div class="cont__map-wrapper">
                                        <div class="cont__map-title">Email</div>
                                        <div class="cont__map-text">company@gmail.com</div>
                                    </div>
                                </div>
                                <div class="desc__map-content cont__map uk-flex">
                                    <div class="cont__map-icon">
                                        <picture>
                                            <img src="{{ asset('main/img/tel-icon.png') }}"/></picture>
                                    </div>
                                    <div class="cont__map-wrapper">
                                        <div class="cont__map-title">Телефон</div>
                                        <div class="cont__map-text">
                                            +99890 234-23-45<br> +99890 234-23-45
                                        </div>
                                    </div>
                                </div>
                                <div class="desc__map-content cont__map uk-flex">
                                    <div class="cont__map-icon">
                                        <picture>
                                            <img src="{{ asset('main/img/glob-icon.png') }}"/></picture>
                                    </div>
                                    <div class="cont__map-wrapper">
                                        <div class="cont__map-title">Соц. сети</div>
                                        <div class="cont__map-text uk-flex">
                                            <a href="#" class="uk-margin-small-right">
                                                <picture>
                                                    <img src="{{ asset('main/img/twitter.svg') }}" width="21px" height="21px" alt="">
                                                </picture>
                                            </a>
                                            <a href="#" class="uk-margin-small-right">
                                                <picture>
                                                    <img src="{{ asset('main/img/facebook.svg') }}" width="21px" height="21px" alt="">
                                                </picture>
                                            </a>
                                            <a href="#" class="uk-margin-small-right">
                                                <picture>
                                                    <img src="{{ asset('main/img/vk.svg') }}" width="21px" height="21px" alt=""></picture>
                                            </a>
                                            <a href="#" class="uk-margin-auto">
                                                <picture>
                                                    <img src="{{ asset('main/img/instagramm.svg') }}" width="21px" height="21px" alt="">
                                                </picture>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
