@extends('main.layouts.app')
@push('styles')
    <link rel="stylesheet" href="{{ asset('main/css/yandexMap/style.css') }}">
@endpush
@push('langSwitcher')
    @include('main.includes.langSwitcher', ['id' => $disease->id])
@endpush
@section('content')
    <div class="content">
        <page class="diagnose-article da">
            <!-- First part article -->
            <section class="da__article">
                <div class="uk-container uk-container-center ta__container">
                    <div class="block__wrapper uk-width-1-1 ta__block block-ta">
                        <!-- Container title -->
                        <h2 class="da__subtitle block__subtitle uk-margin-small">@lang('main.diseases.article.diagnostic.titleName')</h2>
                        <h1 class="da__title block__title uk-margin-small">@lang('main.diseases.article.diagnostic.title')
                            "{{ $disease->title }}"</h1>
                        <div class="da__tags block__tags uk-flex uk-flex-center uk-flex-wrap">
                            <a href="#ta__symptoms" class="ta__tag block__tag" uk-scroll>#симптомы</a>
                            <a href="#ta__lab-diag" class="ta__tag block__tag" uk-scroll>#как диагностировать</a>
                            <a href="#ta__treatment" class="ta__tag block__tag" uk-scroll>#как лечить</a>
                            <a href="#ta__title-map" class="ta__tag block__tag" uk-scroll>#к кому обращаться</a>
                        </div>
                        <!-- background pictures -->
                        <div class="anim__background anim-bg2">
                            <div class="anim__background-mask">
                                <picture>
                                    <img src="{{ asset('main/img/Mask.png') }}" alt=""/></picture>
                            </div>
                        </div>
                        <article class="da__content block__article-text">
                            {!! $disease->description !!}
                            <div uk-filter="target: .js-filter" class="accordion treatment-article__symptoms">
                                @include('main.includes.diseaseBlocks.symptoms')
                            </div>
                        </article>

                        <!-- treatment article text content -->


                        <div class="anim__background block__background-anim anim-bg2">
                            <picture>
                                <img src="{{ asset('main/img/footerAtom.png') }}" alt="" class="anim__bg-atom">
                            </picture>
                        </div>

                    </div>
                </div>
            </section>

            <!-- Lab diagnostic -->
        @include('main.includes.diseaseBlocks.labDiagnostics')

        <!-- Лечение -->
        @include('main.includes.diseaseBlocks.yandexMap')

        <!-- блок с часто задаваемыми вопросами -->
        @include('main.includes.diseaseBlocks.faq')

        <!-- Блок запись на консультацию -->
            <section class="da__consult">
                <div class="uk-container uk-container-center ta__container">
                    <div class="da__consult-block">
                        <h1 class="da__title block__title">@lang('main.diseases.article.consultation.title')</h1>
                        <div
                            class="da__consult-wrapper uk-grid-match uk-child-width-1-1 uk-child-width-1-2@l uk-child-width-1-4@xl"
                            uk-grid>
                            <div>
                                <div class="da__consult-card uk-card-default">
                                    <div class="uk-flex">
                                        <div class="da__consult-card-icon">
                                            <picture>
                                                <img src="{{ asset('main/img/time-icon.png') }}"/></picture>
                                        </div>
                                        <div class="da__consult-card-wrapper">
                                            <div
                                                class="da__consult-card-title">@lang('main.diseases.article.consultation.workingHours.title')</div>
                                            <div
                                                class="da__consult-card-text">@lang('main.diseases.article.consultation.workingHours.text.1')</div>
                                            <div
                                                class="da__consult-card-text">@lang('main.diseases.article.consultation.workingHours.text.2')</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="da__consult-card uk-card-default">
                                    <div class="uk-flex">
                                        <div class="da__consult-card-icon">
                                            <picture>
                                                <img src="{{ asset('main/img/location-icon.png') }}"/></picture>
                                        </div>
                                        <div class="">
                                            <div
                                                class="da__consult-card-title">@lang('main.diseases.article.consultation.address.title')</div>
                                            <div
                                                class="da__consult-card-text">@lang('main.diseases.article.consultation.address.text.1')</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="da__consult-card uk-card-default">
                                    <div class="uk-flex">
                                        <div class="da__consult-card-icon">
                                            <picture>
                                                <img src="{{ asset('main/img/tel-icon.png') }}"/></picture>
                                        </div>
                                        <div class="">
                                            <div
                                                class="da__consult-card-title">@lang('main.diseases.article.consultation.phoneNumbers.title')</div>
                                            <div
                                                class="da__consult-card-text">@lang('main.diseases.article.consultation.phoneNumbers.text.1')</div>
                                            <div
                                                class="da__consult-card-text">@lang('main.diseases.article.consultation.phoneNumbers.text.2')</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="da__consult-card uk-card-default">
                                    <div class="uk-flex">
                                        <div class="da__consult-card-icon">
                                            <picture>
                                                <img src="{{ asset('main/img/email-icon.png') }}"/></picture>
                                        </div>
                                        <div class="cont__map-wrapper">
                                            <div
                                                class="da__consult-card-title">@lang('main.diseases.article.consultation.email.title')</div>
                                            <div
                                                class="da__consult-card-text">@lang('main.diseases.article.consultation.email.text.1')</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </page>
    </div>
@endsection
@push('scripts')
    @include('main.includes.yandexMap', ['clinics' => $clinics])
@endpush
