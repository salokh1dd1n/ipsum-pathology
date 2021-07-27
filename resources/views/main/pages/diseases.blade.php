@extends('main.layouts.app')
@push('langSwitcher')
    @include('main.includes.langSwitcher')
@endpush
@section('content')
    <div class="content">
        <section class="treatment-nav">
            <div class="uk-container uk-container-center">
                <div class="block__wrapper uk-width-1-1">
                    <!-- Container title -->
                    <h1 class="treatment__title block__title">
                        @if (currentRouteName() == 'diagnostics')
                            @lang('main.diseases.title.diagnostics')
                        @elseif (currentRouteName() == 'treatments')
                            @lang('main.diseases.title.treatments')
                        @endif
                    </h1>
                    <!-- background pictures -->
                    <div class="anim__background anim-bg2">
                        <div class="anim__background-mask">
                            <picture>
                                <img src="{{ asset('main/img/Mask.png') }}" alt=""/></picture>
                        </div>
                    </div>

                    <div class="block__layout uk-flex-center uk-child-width-1-2@m uk-child-width-1-3@l" uk-grid>

                        @forelse($diseases as $disease)
                            <div>
                                <div class="block__card uk-card uk-card-default uk-card-body">
                                    <div class="block__card-img uk-flex uk-flex-center">
                                        <picture>
                                            <img src="{{ asset('storage/uploads/images/'.$disease->image) }}"
                                                 data-src="{{ asset('storage/uploads/images/'.$disease->image) }}"
                                                 width="340px" height="362px" uk-img
                                                 sizes="(min-width: 340px) 340px, 100vw">
                                        </picture>
                                    </div>
                                    <div class="block__card-title">
                                        {{ $disease->title }}
                                    </div>
                                    <div class="block__card-description">
                                        {{ getShortDesc($disease->description) }}
                                    </div>
                                    <a href="{{ routeWithLocale(currentRouteName().'.show', $disease->id) }}"
                                       class="block__card-btn btn">@lang('main.moreDetails')</a>
                                </div>
                            </div>
                        @empty
                            <div>
                                <h3 class="uk-text-center">@lang('main.noRecordsFound')</h3>
                            </div>
                        @endforelse

                    </div>
                    @if($diseases->total() > $diseases->count())
                        {{ $diseases->links('main.includes.pagination') }}
                    @endif

                    <div class="anim__background block__background-anim anim-bg2">
                        <picture>
                            <img src="{{ asset('main/img/footerAtom.png') }}" alt="" class="anim__bg-atom"></picture>
                    </div>
                </div>
            </div>
        </section>
    </div
@endsection
