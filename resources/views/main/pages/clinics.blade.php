@extends('main.layouts.app')
@push('langSwitcher')
    @include('main.includes.langSwitcher')
@endpush
@section('content')
    <div class="content">
        <page class="treatment-location trmnt-loc">
            <!-- First part article -->
            <section class="trmnt-loc__wrapper">
                <div class="uk-container uk-container-center ta__container">
                    <div class="block__wrapper uk-width-1-1 lab-res__block">
                        <!-- Container title -->
                        <h1 class="trmnt-loc__title block__title uk-margin-small">Наименование лабораторного
                            исследования</h1>
                        <!-- background pictures -->
                        @if($clinics->count() > 0)
                            <div class="anim__background anim-bg2">
                                <div class="anim__background-mask">
                                    <picture>
                                        <img src="{{ asset('main/img/Mask.png') }}" alt=""/></picture>
                                </div>
                            </div>
                            <div class="block__map-wrapper">
                                <div id="map" style="width: 100%; height: 720px; background-color: #e5e3df;"></div>
                            </div>
                        @endif
                    <!-- background atom -->
                        <div class="anim__background block__background-anim anim-bg2">
                            <picture>
                                <img src="{{ asset('main/img/footerAtom.png') }}" alt="" class="anim__bg-atom"
                                     width="248px"
                                     height="248px">
                            </picture>
                        </div>


                        <div
                            class="block__layout uk-flex-center uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match"
                            uk-grid>
                            @forelse ($clinics as $clinic)
                                <div>
                                    <div class="block__card uk-card uk-card-default uk-card-body">
                                        <div class="block__card-title">
                                            {{ $clinic->title }}
                                        </div>
                                        <div class="block__card-description">
                                            {{ $clinic->address }}
                                        </div>
                                        <a href="tel:+998{{ $clinic->phone_number }}" class="block__card-btn btn">
                                            <picture>
                                                <img src="{{ asset('main/img/tel-forbtn.png') }}"
                                                     class="block__card-btn-call"
                                                     data-src="{{ asset('main/img/tel-forbtn.png') }}" width="18px"
                                                     height="18px" uk-img
                                                     sizes="(min-width: 18px) 18px" alt=""></picture>
                                            Позвонить
                                        </a>
                                    </div>
                                </div>
                            @empty
                                <div>
                                    <h3 class="uk-text-center">Записей не найдено</h3>
                                </div>
                            @endforelse

                        </div>
                        @if($clinics->total() > $clinics->count())
                            {{ $clinics->links('main.includes.pagination') }}
                        @endif

                        <div class="anim__background anim-bg2">
                            <div class="anim__background-middle">
                                <picture>
                                    <img src="{{ asset('main/img/Virus.png') }}" alt="" class="anim__bg-middle"
                                         data-src="{{ asset('main/img/Virus.png') }}"
                                         width="213px" height="213px" alt="" uk-img
                                         sizes="(min-width: 213px) 213px, 100vw"/></picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </page>
    </div>
@endsection
@push('scripts')
    @include('main.includes.yandexMap', ['clinics' => $yandexData])
@endpush
