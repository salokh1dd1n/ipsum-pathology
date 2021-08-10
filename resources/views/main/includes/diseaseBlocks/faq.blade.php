<section class="ta__questions">
    <div class="uk-container uk-container-center ta__container">
        <div class="block__wrapper uk-width-1-1">
            <!-- Container title -->
            <h1 class="treatment-article__title block__title">@lang('main.diseases.article.faqTitle')</h1>
            <div uk-filter="target: .js-filter">
                <ul class="uk-subnav uk-subnav-pill">
                    @foreach($tags as $tagKey => $tagTitle)
                        <li @if ($loop->first) class="uk-active"
                            @endif uk-filter-control="[data-tags*='{{ $tagKey }}']"><a href="#">{{ $tagTitle }}</a></li>
                    @endforeach
                </ul>
                <div class="accord__wrapper">
                    <ul class="js-filter uk-child-width-1 uk-child-width-1@m uk-text-center" uk-grid
                        uk-accordion="multiple: true">
                        @foreach($disease->faq as $faq)
                            @foreach($faq->tags as $tag)
                                <li data-tags="{{ $tag->id }}">
                                    <a class="uk-accordion-title  accordion__item-title" href="#">{{ $faq->title }}</a>
                                    <div class="uk-accordion-content">
                                        <p>{{ $faq->description }}</p>
                                    </div>
                                </li>
                            @endforeach
                        @endforeach
                    </ul>
                </div>
                <ul class="js-filter uk-child-width-1-1 uk-child-width-1-2@m uk-text-center accordion__items-container"
                    uk-grid="masonry: true">
                    <!-- data-theme-1 -->
                    @foreach($disease->faq as $faq)
                        @foreach($faq->tags as $tag)
                            <li data-theme="{{ $tag->id }}" class="accordion__items-element">
                                <div class="uk-card uk-card-default uk-card-body accordion__item-card">
                                    <ul uk-accordion>
                                        <li>
                                            <a class="uk-accordion-title accordion__item-title uk-text-left"
                                               href="#">{{ $faq->title }}</a>
                                            <div class="uk-accordion-content accordion__item-content">
                                                <p>{{ $faq->description }}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        @endforeach
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</section>
