<section class="treatment">
    <div class="uk-container uk-container-center da__container">
        <div class="block__wrapper uk-width-1-1">
        @if (currentRouteName() == 'treatments.show')
            <!-- Container title -->
                <h1 class="treatment-article__title block__title">@lang('main.diseases.article.treatment.title')</h1>
        @endif
        <!-- background pictures -->
            <div class="anim__background anim-bg2">
                <div class="anim__background-mask">
                    <picture>
                        <img src="{{ asset('main/img/Virus.png') }}" alt="" class="anim__bg-middle"/>
                    </picture>
                </div>
            </div>
            @if (currentRouteName() == 'treatments.show')
                <p>{{ $disease->treatment_desc }}</p>
            @endif

            <h1 class="da__title block__title">@lang('main.diseases.article.clinicsTitle')</h1>
            <div class="block__map-wrapper">
                <div id="map" style="width: 100%; height: 548px; background-color: #e5e3df;"></div>
            </div>
        </div>
    </div>
</section>
