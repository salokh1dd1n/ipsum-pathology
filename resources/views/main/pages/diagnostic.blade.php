@extends('main.layouts.app')
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
        @include('main.includes.diseaseBlocks.consultation')
        </page>
    </div>
@endsection
@push('scripts')
    @include('main.includes.yandexMap', ['clinics' => $clinics])
@endpush
