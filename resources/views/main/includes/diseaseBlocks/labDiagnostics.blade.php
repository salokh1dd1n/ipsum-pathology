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
                                            <span
                                                class="block__tag">{{ formattedPrice($diagnostic->price) }} @lang('main.diseases.article.labDiagnostics.countryCurrency')</span>
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
            <ul class="uk-child-width-1-2@m uk-child-width-1-1@s" uk-accordion="multiple: true" uk-grid>
                <li class="uk-open">
                    <a class="uk-accordion-title" href="#">Item 1</a>
                    <div class="uk-accordion-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="#">Item 2</a>
                    <div class="uk-accordion-content">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor reprehenderit.</p>
                    </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="#">Item 3</a>
                    <div class="uk-accordion-content">
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat proident.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
