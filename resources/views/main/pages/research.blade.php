@extends('main.layouts.app')
@push('langSwitcher')
    @include('main.includes.langSwitcher', ['id' => $research->id])
@endpush
@section('content')
    <div class="content">
        <page class="labaratory-research lab-res">

            <!-- First part article -->
            <section class="lab-res__article">
                <div class="uk-container uk-container-center ta__container">
                    <div class="block__wrapper uk-width-1-1 lab-res__block">
                        <!-- Container title -->
                        <h1 class="lab-res__title block__title uk-margin-small">{{ $research->title }}</h1>
                        <!-- background pictures -->
                        <div class="anim__background anim-bg2">
                            <div class="anim__background-mask">
                                <picture>
                                    <img src="{{ asset('main/img/Mask.png') }}" alt=""/></picture>
                            </div>
                        </div>
                        <article class="lab-res__content block__article-text">
                            {{ $research->short_desc }}
                        </article>

                        <div class="uk-flex uk-flex-center">
                            <a href="#applicationForm" class="btn uk-margin-small-right">Оставить заявку</a>
                            <a href="tel:+1234567890" class="btn">Позвонить</a>
                        </div>

                        <div
                            class="lab-res__advantages lab-res__adv uk-grid-match uk-child-width-1-1 uk-child-width-1-2@l uk-child-width-1-4@xl"
                            uk-grid>
                            @foreach($research->advantages as $key => $advantage)
                                <div>
                                    <div class="adv__card uk-card-default">
                                        <div class="">
                                            <div class="adv__card-icon">
                                                <picture>
                                                    <img
                                                        src="{{ asset('storage/uploads/images/'.$advantage->image) }}"/>
                                                </picture>
                                            </div>
                                            <div class="">
                                                <div class="adv__card-title">Преимущество {{ 1 + $key }}</div>
                                                <div class="adv__card-text">{{ $advantage->title }}
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>

                        <!-- treatment article text content -->
                        <div class="anim__background block__background-anim anim-bg2">
                            <picture>
                                <img src="{{ asset('main/img/footerAtom.png') }}" alt=""
                                     class="anim__bg-atom">
                            </picture>
                        </div>

                        <!-- Services -->
                        <h1 class="lab-res__title block__title uk-margin-medium">Наши услуги</h1>
                        <div class="block__layout uk-flex-center uk-child-width-1-2@m uk-child-width-1-3@l"
                             uk-grid>

                            @foreach($research->services as $key => $service)
                                <div>
                                    <div class="block__card uk-card uk-card-default uk-card-body">
                                        <div class="block__card-title">{{ $service->title }}</div>
                                        <div class="block__card-description">{{ $service->description }}</div>
                                        <div class="block__card-prices uk-flex uk-flex-wrap">
                                            <div class="block__card-price">{{ $service->price }} сум</div>
                                            <a href="#" class="block__card-btn btn">Заказать</a>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>

                        <div class="anim__background anim-bg2">
                            <div class="anim__background-middle">
                                <picture>
                                    <img src="{{ asset('main/img/Virus.png') }}" alt=""
                                         class="anim__bg-middle"/>
                                </picture>
                            </div>
                        </div>
                        {{ $research->description }}

                    </div>
                </div>

                @include('main.includes.applicationForm')
            </section>
        </page>
    </div>
@endsection
