<div>
    <h1 class="treatment-article__title block__title">Симптомы</h1>
    <ul class="js-filter uk-child-width-1-1 uk-child-width-1-2@m uk-text-center accordion__items-container"
        uk-grid="masonry: true">
        @foreach ($disease->symptoms as $symptom)
            <li class="accordion__items-element">
                <div class="uk-card uk-card-default uk-card-body accordion__item-card">
                    <ul uk-accordion>
                        <li>
                            <a class="uk-accordion-title accordion__item-title uk-text-left"
                               href="#">{{ $symptom->title }}</a>
                            <div class="uk-accordion-content accordion__item-content">
                                <p>{{ $symptom->description }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        @endforeach
    </ul>

    <p>{{ $disease->symptom_desc }}</p>
</div>
