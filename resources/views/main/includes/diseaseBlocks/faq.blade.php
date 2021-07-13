<section class="ta__questions">
    <div class="uk-container uk-container-center ta__container">
        <div class="block__wrapper uk-width-1-1">
            <!-- Container title -->
            <h1 class="treatment-article__title block__title">Часто задаваемые вопросы</h1>
            <div uk-filter="target: .js-filter" class="accordion">

                <ul class="accordion__btns questions__theme-nav uk-subnav uk-subnav-pill uk-flex uk-flex-center">
                    @foreach($tags as $tagKey => $tagTitle)
                        <li @if (array_key_first($tags) == $tagKey)
                            class="uk-active"
                            @endif
                            uk-filter-control="[data-theme='{{ $tagKey }}']">
                            <a class="btn" href="#">{{ $tagTitle }}</a>
                        </li>
                    @endforeach
                </ul>

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
