@foreach (getLangWithoutExisting() as $langKey)
    <li class="uk-link-reset">
        @if (isset($id))
            <a class="header__nav-link uk-text-capitalize" href="{{ route(currentRouteName(), [$langKey, $id]) }}">
                <picture>
                    <img src="{{ asset('main/img/englang.png') }}" alt=""/></picture>
                {{ $langKey }}
            </a>
        @else
            <a class="header__nav-link uk-text-capitalize" href="{{ route(currentRouteName(), $langKey) }}">
                <picture>
                    <img src="{{ asset('main/img/englang.png') }}" alt=""/></picture>
                {{ $langKey }}
            </a>
        @endif
    </li>
@endforeach
