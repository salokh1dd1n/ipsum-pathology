@extends('main.layouts.app')
@section('content')
    <div class="content">
        <section class="treatment-nav">
            <div class="uk-container uk-container-center">
                <div class="block__wrapper uk-width-1-1">
                    <!-- Container title -->
                    <h1 class="how__title block__title">Как вылечить рак</h1>
                    <!-- background pictures -->
                    <div class="anim__background anim-bg2">
                        <div class="anim__background-mask">
                            <picture>
                                <source srcset="{{ asset('main/img/Mask.webp') }}" type="image/webp">
                                <img src="{{ asset('main/img/Mask.png') }}" alt=""/></picture>
                        </div>
                    </div>

                    <div class="block__layout uk-flex-center uk-child-width-1-2@m uk-child-width-1-3@l" uk-grid>
                        <div>
                            <div class="block__card uk-card uk-card-default uk-card-body">
                                <div class="block__card-img uk-flex uk-flex-center">
                                    <picture>
                                        <source srcset="{{ asset('main/img/news1.webp') }}" type="image/webp">
                                        <img src="{{ asset('main/img/news1.png') }}" data-src="{{ asset('main/img/news1.png') }}" width="340px"
                                             height="362px"
                                             alt="" uk-img sizes="(min-width: 340px) 340px, 100vw"></picture>
                                </div>
                                <div class="block__card-title">
                                    Вид ракого заболевания
                                </div>
                                <div class="block__card-description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                                <a href="#" class="block__card-btn btn">Подробнее</a>
                            </div>
                        </div>
                        <div>
                            <div class="block__card uk-card uk-card-default uk-card-body">
                                <div class="block__card-img uk-flex uk-flex-center">
                                    <picture>
                                        <source srcset="{{ asset('main/img/news1.webp') }}" type="image/webp">
                                        <img src="{{ asset('main/img/news1.png') }}" data-src="{{ asset('main/img/news1.png') }}" width="340px"
                                             height="362px"
                                             alt="" uk-img sizes="(min-width: 340px) 340px, 100vw"></picture>
                                </div>
                                <div class="block__card-title">
                                    Вид ракого заболевания
                                </div>
                                <div class="block__card-description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                                <a href="#" class="block__card-btn btn">Подробнее</a>
                            </div>
                        </div>
                        <div>
                            <div class="block__card uk-card uk-card-default uk-card-body">
                                <div class="block__card-img uk-flex uk-flex-center">
                                    <picture>
                                        <source srcset="{{ asset('main/img/news1.webp') }}" type="image/webp">
                                        <img src="{{ asset('main/img/news1.png') }}" data-src="{{ asset('main/img/news1.png') }}" width="340px"
                                             height="362px"
                                             alt="" uk-img sizes="(min-width: 340px) 340px, 100vw"></picture>
                                </div>
                                <div class="block__card-title">
                                    Вид ракого заболевания
                                </div>
                                <div class="block__card-description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                                <a href="#" class="block__card-btn btn">Подробнее</a>
                            </div>
                        </div>
                        <div>
                            <div class="block__card uk-card uk-card-default uk-card-body">
                                <div class="block__card-img uk-flex uk-flex-center">
                                    <picture>
                                        <source srcset="{{ asset('main/img/news1.webp') }}" type="image/webp">
                                        <img src="{{ asset('main/img/news1.png') }}" data-src="{{ asset('main/img/news1.png') }}" width="340px"
                                             height="362px"
                                             alt="" uk-img sizes="(min-width: 340px) 340px, 100vw"></picture>
                                </div>
                                <div class="block__card-title">
                                    Вид ракого заболевания
                                </div>
                                <div class="block__card-description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                                <a href="#" class="block__card-btn btn">Подробнее</a>
                            </div>
                        </div>
                        <div>
                            <div class="block__card uk-card uk-card-default uk-card-body">
                                <div class="block__card-img uk-flex uk-flex-center">
                                    <picture>
                                        <source srcset="{{ asset('main/img/news1.webp') }}" type="image/webp">
                                        <img src="{{ asset('main/img/news1.png') }}" data-src="{{ asset('main/img/news1.png') }}" width="340px"
                                             height="362px"
                                             alt="" uk-img sizes="(min-width: 340px) 340px, 100vw"></picture>
                                </div>
                                <div class="block__card-title">
                                    Вид ракого заболевания
                                </div>
                                <div class="block__card-description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                                <a href="#" class="block__card-btn btn">Подробнее</a>
                            </div>
                        </div>
                        <div>
                            <div class="block__card uk-card uk-card-default uk-card-body">
                                <div class="block__card-img uk-flex uk-flex-center">
                                    <picture>
                                        <source srcset="{{ asset('main/img/news1.webp') }}" type="image/webp">
                                        <img src="{{ asset('main/img/news1.png') }}" data-src="{{ asset('main/img/news1.png') }}" width="340px"
                                             height="362px"
                                             alt="" uk-img sizes="(min-width: 340px) 340px, 100vw"></picture>
                                </div>
                                <div class="block__card-title">
                                    Вид ракого заболевания
                                </div>
                                <div class="block__card-description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                                <a href="#" class="block__card-btn btn">Подробнее</a>
                            </div>
                        </div>

                    </div>

                    <div class="anim__background block__background-anim anim-bg2">
                        <picture>
                            <source srcset="{{ asset('main/img/footerAtom.webp') }}" type="image/webp">
                            <img src="{{ asset('main/img/footerAtom.png') }}" alt="" class="anim__bg-atom"></picture>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
