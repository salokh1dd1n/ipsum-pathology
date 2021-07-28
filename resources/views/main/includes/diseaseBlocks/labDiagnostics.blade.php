<section class="lab-diag">
    <div class="uk-container uk-container-center ta__container">
        <div class="lab__diag block__wrapper uk-width-1-1">
            <!-- Container title -->
            <h1 class="treatment-article__title block__title">@lang('main.diseases.article.labDiagnostics.title')</h1>
            <div uk-filter="target: .js-filter" class="accordion">
                <ul class="js-filter uk-child-width-1-1 uk-child-width-1-2@m uk-text-center accordion__items-container"
                    uk-grid="masonry: true">
                    @foreach ($disease->diagnostics as $diagnostic)
                        <li class="accordion__items-element">
                            <div class="uk-card uk-card-default uk-card-body accordion__item-card">
                                <ul uk-accordion>
                                    <li>
                                        <a class="uk-accordion-title accordion__item-title uk-text-left"
                                           href="#">
                                            {{ $diagnostic->title }}
                                            <span class="block__tag">{{ formattedPrice($diagnostic->price) }} @lang('main.diseases.article.labDiagnostics.countryCurrency')</span>
                                        </a>
                                        <div class="uk-accordion-content accordion__item-content">
                                            <p>{{ $diagnostic->description }}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</section>
