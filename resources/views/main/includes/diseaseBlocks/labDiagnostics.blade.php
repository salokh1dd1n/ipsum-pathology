<section class="lab-diag">
    <div class="uk-container uk-container-center ta__container">
        <div class="lab__diag block__wrapper uk-width-1-1">
            <!-- Container title -->
            <h1 class="treatment-article__title block__title">@lang('main.diseases.article.labDiagnostics.title')</h1>
            <div class="accordion">
                <div class="accord__wrapper">
                    <ul uk-accordion="multiple: true">
                        @foreach ($disease->diagnostics as $diagnostic)
                            @if($loop->odd)
                                <li @if ($loop->first) class="uk-open" @endif>
                                    <a class="uk-accordion-title  accordion__item-title"
                                       href="#">{{ $diagnostic->title }}</a>
                                    <div class="uk-accordion-content">
                                        <p>{{ $diagnostic->description }}</p>
                                    </div>
                                    <span
                                        class="lab-price">{{ formattedPrice($diagnostic->price) }} @lang('main.diseases.article.labDiagnostics.countryCurrency')</span>
                                </li>
                            @endif
                        @endforeach
                    </ul>
                    <ul uk-accordion="multiple: true">
                        @foreach ($disease->diagnostics as $diagnostic)
                            @if($loop->even)
                                <li>
                                    <a class="uk-accordion-title  accordion__item-title"
                                       href="#">{{ $diagnostic->title }}</a>
                                    <div class="uk-accordion-content">
                                        <p>{{ $diagnostic->description }}</p>
                                    </div>
                                    <span
                                        class="lab-price">{{ formattedPrice($diagnostic->price) }} @lang('main.diseases.article.labDiagnostics.countryCurrency')</span>
                                </li>
                            @endif
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
