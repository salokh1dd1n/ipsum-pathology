@extends('main.layouts.app')
@push('langSwitcher')
    @include('main.includes.langSwitcher')
@endpush
@section('content')
    <div class="content">
        <section class="questions">
            <div class="uk-container uk-container-center">
                <div class="block__wrapper uk-width-1-1">
                    <!-- Container title -->
                    <h1 class="treatment-article__title block__title">Часто задаваемые вопросы</h1>
                    <div uk-filter="target: .js-filter">
                        <ul class="uk-subnav uk-subnav-pill">
                            @foreach($tags as $tagKey => $tagTitle)
                                <li @if ($loop->first) class="uk-active"
                                    @endif uk-filter-control="[data-tags*='{{ $tagKey }}']"><a
                                        href="#">{{ $tagTitle }}</a></li>
                            @endforeach
                        </ul>
                        <div class="accord__wrapper">
                            <ul class="js-filter uk-child-width-1 uk-child-width-1@m uk-text-center" uk-grid
                                uk-accordion="multiple: true">
                                @foreach($faqs as $faq)
                                    @foreach($faq->tags as $tag)
                                        <li data-tags="{{ $tag->id }}">
                                            <a class="uk-accordion-title  accordion__item-title"
                                               href="#">{{ $faq->title }}</a>
                                            <div class="uk-accordion-content">
                                                <p>{{ $faq->description }}</p>
                                            </div>
                                        </li>
                                    @endforeach
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
@endsection
