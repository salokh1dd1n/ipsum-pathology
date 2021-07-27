@extends('main.layouts.app')
@push('langSwitcher')
    @include('main.includes.langSwitcher')
@endpush
@section('content')
    <div class="content">
        <section class="our-team">
            <div class="uk-container uk-container-center">
                <div class="block__wrapper uk-width-1-1">
                    <!-- Container title -->
                    <h1 class="our-team__title block__title">@lang('main.team.title')</h1>
                    <!-- background pictures -->
                    <div class="anim__background anim-bg2">
                        <div class="anim__background-mask">
                            <picture>
                                <img src="{{ asset('main/img/Mask.png') }}" alt=""/></picture>
                        </div>
                    </div>

                    <div class="block__layout uk-flex-center uk-child-width-1-2@m uk-child-width-1-3@l" uk-grid>
                        @forelse ($team as $expert)
                            <div>
                                <div class="block__card uk-card uk-card-default uk-card-body">
                                    <div class="block__card-img uk-flex uk-flex-center">
                                        <picture>
                                            <img src="{{ asset('storage/uploads/images/'.$expert->image) }}"
                                                 data-src="{{ asset('storage/uploads/images/'.$expert->image) }}" width="255px"
                                                 height="255px" alt="" uk-img sizes="(min-width: 250px) 250px, 80vw">
                                        </picture>
                                    </div>
                                    <div class="block__card-title uk-text-center">{{ $expert->name }}</div>
                                    <div class="block__card-subtitle uk-text-center">{{ $expert->role }}</div>
                                    <div class="block__card-description uk-text-center">{{ $expert->description }}</div>
                                    <div class="block__card-btn-wrapper uk-flex uk-flex-center">
                                        <a href="tel:+998{{ $expert->phone_number }}" class="block__card-btn btn">@lang('main.call')</a>
                                    </div>
                                </div>
                            </div>
                        @empty
                            <div>
                                <h3 class="uk-text-center">@lang('main.noRecordsFound')</h3>
                            </div>
                        @endforelse

                    </div>
                    @if($team->total() > $team->count())
                        {{ $team ->links('main.includes.pagination') }}
                    @endif

                    <div class="anim__background block__background-anim anim-bg2">
                        <picture>
                            <img src="{{ asset('main/img/footerAtom.png') }}" alt="" class="anim__bg-atom"></picture>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
