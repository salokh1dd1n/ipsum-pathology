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
            <section class="ta__treatment">
                <div class="uk-container uk-container-center ta__container">
                    <div class="block__wrapper uk-width-1-1">
                        <!-- Container title -->
                        <h1 class="treatment-article__title block__title">Лечение</h1>
                        <!-- background pictures -->
                        <div class="anim__background anim-bg2">
                            <div class="anim__background-mask">
                                <picture>
                                    <img src="{{ asset('main/img/Virus.png') }}" alt="" class="anim__bg-middle"/>
                                </picture>
                            </div>
                        </div>
                        <p>{{ $disease->treatment_desc }}</p>


                        <h1 class="treatment-article__title block__title">К кому обращаться за лечением?</h1>
                        <div class="block__map-wrapper">
                            <script type="text/javascript" charset="utf-8" async
                                    src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A64c297f7e35b8dae3bb81cb67c45ae1923f5314b80559a304bcb95095c74d368&amp;width=100%25&amp;height=548px&amp;lang=ru_RU&amp;scroll=false"></script>
                        </div>
                    </div>
                </div>
            </section>

            <!-- блок с часто задаваемыми вопросами -->
        @include('main.includes.diseaseBlocks.faq')

        <!-- Блок запись на консультацию -->
            <section class="ta__consult">
                <div class="uk-container uk-container-center ta__container">
                    <div class="ta__consult-block">
                        <h1 class="ta__title block__title">Запись на консультацию</h1>
                        <div
                            class="ta__consult-wrapper uk-grid-match uk-child-width-1-1 uk-child-width-1-2@l uk-child-width-1-4@xl"
                            uk-grid>
                            <div class="ta__consult-cards">
                                <div class="ta__consult-card uk-card-default">
                                    <div class="uk-flex">
                                        <div class="ta__consult-card-icon">
                                            <picture>
                                                <img src="{{ asset('main/img/time-icon.png') }}"/></picture>
                                        </div>
                                        <div class="">
                                            <div class="ta__consult-card-title">Режим работы</div>
                                            <div class="ta__consult-card-text">С Пн по Пт - 15:00 - 18:00</div>
                                            <div class="ta__consult-card-text">Сб по Вс - 15:00 - 18:00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="ta__consult-card uk-card-default">
                                    <div class="uk-flex">
                                        <div class="ta__consult-card-icon">
                                            <picture>
                                                <img src="{{ asset('main/img/location-icon.png') }}"/></picture>
                                        </div>
                                        <div class="">
                                            <div class="ta__consult-card-title">Адрес клиники</div>
                                            <div class="ta__consult-card-text">г.Ташкент. Яккасарайский р-н</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="ta__consult-card uk-card-default">
                                    <div class="uk-flex">
                                        <div class="ta__consult-card-icon">
                                            <picture>
                                                <img src="{{ asset('main/img/tel-icon.png') }}"/></picture>
                                        </div>
                                        <div class="">
                                            <div class="ta__consult-card-title">Телефон для записи</div>
                                            <div class="ta__consult-card-text">+99890 234-23-45<br> +99890 234-23-45
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="ta__consult-card uk-card-default">
                                    <div class="uk-flex">
                                        <div class="ta__consult-card-icon">
                                            <picture>
                                                <img src="{{ asset('main/img/email-icon.png') }}"/></picture>
                                        </div>
                                        <div class="cont__map-wrapper">
                                            <div class="ta__consult-card-title">Электронная почта</div>
                                            <div class="ta__consult-card-text">Company@gmail.com</div>
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
