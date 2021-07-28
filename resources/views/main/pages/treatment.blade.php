@extends('main.layouts.app')
@push('langSwitcher')
    @include('main.includes.langSwitcher', ['id' => $disease->id])
@endpush
@section('content')
    <div class="content">
        <page class="treatment-article ta">

            <!-- First part article -->
            <section class="ta__article">
                <div class="uk-container uk-container-center ta__container">
                    <div class="block__wrapper uk-width-1-1 ta__block block-ta">
                        <!-- Container title -->
                        <h2 class="ta__subtitle block__subtitle uk-margin-small">Как вылечить рак</h2>
                        <h1 class="ta__title block__title uk-margin-small">Лечение "{{ $disease->title }}"</h1>
                        <div class="ta__tags block__tags uk-flex uk-flex-center uk-flex-wrap">
                            <div class="ta__tag block__tag">#симптомы</div>
                            <div class="ta__tag block__tag">#как диагностировать</div>
                            <div class="ta__tag block__tag">#как лечить</div>
                            <div class="ta__tag block__tag">#к кому обращаться</div>
                        </div>
                        <!-- background pictures -->
                        <div class="anim__background anim-bg2">
                            <div class="anim__background-mask">
                                <picture>
                                    <img src="{{ asset('main/img/Mask.png') }}" alt=""/>
                                </picture>
                            </div>
                        </div>
                        <article class="ta__content block__article-text">
                            {!! $disease->description !!}
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

            <!-- Sypmtoms -->
            <section class="ta__symptoms">
                <div class="uk-container uk-container-center ta__container">
                    <div uk-filter="target: .js-filter" class="accordion treatment-article__symptoms">
                        @include('main.includes.diseaseBlocks.symptoms')
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
