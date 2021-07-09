<header class="header">
    <div class="uk-container uk-container-center">
        <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left header__logo">
                <ul class="uk-navbar-nav">
                    <li class="uk-active">
                        <a href="#">
                            <picture>
                                <source srcset="{{ asset('main/img/logo.webp') }}" type="image/webp">
                                <img src="{{ asset('main/img/logo.png') }}" alt=""/></picture>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li class="uk-active">
                        <a class="header__nav-link" href="#">@lang('home.menu.aboutUs')</a>
                    </li>
                    <li>
                        <a class="header__nav-link" href="#">{{ __('home.menu.servicePrice') }}</a>
                    </li>
                    <li>
                        <a class="header__nav-link" href="#">{{ __('home.menu.forPatients') }}</a>
                    </li>
                    <li>
                        <a class="header__nav-link" href="#">{{ __('home.menu.optics') }}</a>
                    </li>
                    <li>
                        <a class="header__nav-link" href="#">{{ __('home.menu.contacts') }}</a>
                    </li>
                </ul>

                <button class="uk-navbar-toggle" type="button" uk-toggle="target: #offcanvas-nav">
                    <svg
                        width="30"
                        height="30"
                        fill="#fff"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x="2" y="4" width="16" height="1"></rect>
                        <rect x="2" y="9" width="16" height="1"></rect>
                        <rect x="2" y="14" width="16" height="1"></rect>
                    </svg>
                </button>
                <div class="uk-inline header__lang-changer">
                    <button type="button" class="header__lang-btn uk-text-capitalize">
                        <picture>
                            <source srcset="{{ asset('main/img/englang.webp') }}" type="image/webp">
                            <img src="{{ asset('main/img/englang.png') }}" alt=""/></picture>
                        {{ app()->getLocale() }}
                        <picture>
                            <source srcset="{{ asset('main/img/arrowDown.svg') }}" type="image/webp">
                            <img src="{{ asset('main/img/arrowDown.svg') }}" alt=""/></picture>
                    </button>
                    <div class="header__lang-list" type="button" uk-dropdown="mode:click">
                        <ul class="uk-list">
                            @foreach (getLangWithoutExisting() as $langKey)
                                <li class="uk-link-reset">
                                    <a class="header__nav-link uk-text-capitalize" href="{{ route('index', $langKey) }}">
                                        <picture>
                                            <source srcset="{{ asset('main/img/englang.webp') }}" type="image/webp">
                                            <img src="{{ asset('main/img/englang.png') }}" alt=""/></picture>
                                        {{ $langKey }}
                                    </a>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                    <div class="anim-bg3">
                        <picture>
                            <source srcset="{{ asset('main/img/Cursor.webp') }}" type="image/webp">
                            <img src="{{ asset('main/img/Cursor.png') }}" alt="" class="header__cursor"/></picture>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div id="offcanvas-nav" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar">
            <ul class="uk-nav">
                <li class="uk-active">
                    <a href="#">
                        <picture>
                            <source srcset="{{ asset('main/img/logo.webp') }}" type="image/webp">
                            <img src="{{ asset('main/img/logo.png') }}" alt=""/></picture>
                    </a>
                </li>
                <li>
                    <a class="header__nav-link" href="#">О клинике</a>
                </li>
                <li>
                    <a class="header__nav-link" href="#">Услуги и цены</a>
                </li>
                <li>
                    <a class="header__nav-link" href="#">Пациентам</a>
                </li>
                <li>
                    <a class="header__nav-link" href="#">Оптика</a>
                </li>
                <li>
                    <a class="header__nav-link" href="#">Контакты</a>
                </li>
            </ul>
            <div class="uk-inline">
                <button type="button" class="header__lang-btn">
                    <picture>
                        <source srcset="{{ asset('main/img/englang.webp') }}" type="image/webp">
                        <img src="{{ asset('main/img/englang.png') }}" alt=""/></picture>
                    En
                    <picture>
                        <source srcset="{{ asset('main/img/arrowDown.svg') }}" type="image/webp">
                        <img src="{{ asset('main/img/arrowDown.svg') }}" alt=""/></picture>
                </button>
                <div class="header__lang-list" type="button" uk-dropdown="mode:click">
                    <ul class="uk-list">
                        <li class="uk-link-reset">
                            <a class="header__nav-link" href="#">
                                <picture>
                                    <source srcset="{{ asset('main/img/englang.webp') }}" type="image/webp">
                                    <img src="{{ asset('main/img/englang.png') }}" alt=""/></picture>
                                Ru
                            </a>
                        </li>
                        <li class="uk-link-reset">
                            <a class="header__nav-link" href="#">
                                <picture>
                                    <source srcset="{{ asset('main/img/englang.webp') }}" type="image/webp">
                                    <img src="{{ asset('main/img/englang.png') }}" alt=""/></picture>
                                Uz
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="header__anim-bg anim-bg">
        <picture>
            <source srcset="{{ asset('main/img/Pills.webp') }}" type="image/webp">
            <img src="{{ asset('main/img/Pills.png') }}" alt="" class="anim-bg-pills"/></picture>
        <span></span>
    </div>
</header>
