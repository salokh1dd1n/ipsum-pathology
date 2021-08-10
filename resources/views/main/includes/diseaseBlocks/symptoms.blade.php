<div>
    <h1 class="treatment-article__title block__title">Симптомы</h1>
    <div class="accord__wrapper">
        <ul uk-accordion="multiple: true">
            @foreach ($disease->symptoms as $symptom)
                @if ($loop->odd)
                    <li @if ($loop->first) class="uk-open" @endif>
                        <a class="uk-accordion-title  accordion__item-title" href="#">{{ $symptom->title }}</a>
                        <div class="uk-accordion-content">
                            <p>{{ $symptom->description }}</p>
                        </div>
                    </li>
                @endif
            @endforeach
        </ul>
        <ul uk-accordion="multiple: true">
            @foreach ($disease->symptoms as $symptom)
                @if ($loop->even)
                    <li>
                        <a class="uk-accordion-title  accordion__item-title" href="#">{{ $symptom->title }}</a>
                        <div class="uk-accordion-content">
                            <p>{{ $symptom->description }}</p>
                        </div>
                    </li>
                @endif
            @endforeach
        </ul>
    </div>
    <p>{{ $disease->symptom_desc }}</p>
</div>
