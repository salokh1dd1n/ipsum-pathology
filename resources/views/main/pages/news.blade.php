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
                    <h1 class="treatment__title block__title">Новости</h1>
                    <!-- background pictures -->
                    <div class="anim__background anim-bg2">
                        <div class="anim__background-mask">
                            <picture>
                                <img src="{{ asset('main/img/Mask.png') }}" alt=""/></picture>
                        </div>
                    </div>

                    <div class="block__layout uk-flex-center uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@m"
                         uk-grid>
                        @forelse ($news as $newsItem)
                            <div>
                                <div class="block__card uk-card uk-card-default uk-card-body">
                                    <div class="block__card-img uk-flex uk-flex-center">
                                        <picture>
                                            <img src="{{ asset('storage/uploads/images/'.$newsItem->image) }}"
                                                 data-src="{{ asset('storage/uploads/images/'.$newsItem->image) }}" width="460px"
                                                 height="361px" alt="" uk-img></picture>
                                        <label class="block__card-date">{{ $newsItem->published_at }}</label>
                                    </div>
                                    <div class="block__card-title">
                                        {{ $newsItem->title }}
                                    </div>
                                    <div class="block__card-description">
                                        {{ getShortDesc($newsItem->description) }}
                                    </div>
                                    <a href="{{ routeWithLocale('news.show', $newsItem->id) }}" class="block__card-btn btn">Подробнее</a>
                                </div>
                            </div>
                        @empty
                            <div>
                                <h3 class="uk-text-center">Записей не найдено</h3>
                            </div>
                        @endforelse

                    </div>
                    @if($news->total() > $news->count())
                        {{ $news->links('main.includes.pagination') }}
                    @endif
                </div>
                <div class="anim__background block__background-anim anim-bg2">
                    <picture>
                        <img src="{{ asset('main/img/footerAtom.png') }}" alt="" class="anim__bg-atom" width="248px"
                             height="248px">
                    </picture>
                </div>
            </div>
        </section>
    </div>
@endsection
