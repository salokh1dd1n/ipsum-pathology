<div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
    <div class="c-sidebar-brand d-lg-down-none">
        <a class="c-sidebar-brand-full" href="{{ route('dashboard') }}">
            <img src="{{ asset('dashboard/icons/logo.svg') }}" alt="Ipsum Pathology"
                 width="118" height="46">
        </a>
        <a class="c-sidebar-brand-minimized" href="{{ route('dashboard') }}">
            <img src="{{ asset('dashboard/icons/logo.svg') }}" alt="Ipsum Pathology"
                 width="46" height="46">
        </a>
    </div>
    <ul class="c-sidebar-nav">
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="{{ route('news.index') }}">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/icons/free.svg#cil-newspaper') }}"></use>
                </svg>
                Новости
            </a>
        </li>
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="{{ route('applications.index') }}">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/icons/free.svg#cil-share-boxed') }}"></use>
                </svg>
                Заявки
            </a>
        </li>
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="{{ route('team.index') }}">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/icons/free.svg#cil-group') }}"></use>
                </svg>
                Специалисты
            </a>
        </li>
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="{{ route('clinics.index') }}">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/icons/free.svg#cil-hospital') }}"></use>
                </svg>
                К кому обратиться
            </a>
        </li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
            <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/icons/free.svg#cil-chat-bubble') }}"></use>
                </svg>
                FAQ
            </a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{{ route('faq.index') }}">
                        <span class="c-sidebar-nav-icon"></span>
                        FAQ
                    </a>
                </li>
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{{ route('tags.index') }}">
                        <span class="c-sidebar-nav-icon"></span>
                        Теги
                    </a>
                </li>
            </ul>
        </li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
            <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/icons/free.svg#cil-filter') }}"></use>
                </svg>
                Исследования
            </a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{{ route('researches.index') }}">
                        <span class="c-sidebar-nav-icon"></span>
                        Лабораторные исследования
                    </a>
                </li>
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{{ route('advantages.index') }}">
                        <span class="c-sidebar-nav-icon"></span>
                        Преимущества
                    </a>
                </li>
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{{ route('services.index') }}">
                        <span class="c-sidebar-nav-icon"></span>
                        Услуги
                    </a>
                </li>
            </ul>
        </li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
            <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/icons/free.svg#cil-book') }}"></use>
                </svg>
                Болезни
            </a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{{ route('diseases.index') }}">
                        <span class="c-sidebar-nav-icon"></span>
                        Болезни
                    </a>
                </li>
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{{ route('symptoms.index') }}">
                        <span class="c-sidebar-nav-icon"></span>
                        Симптомы
                    </a>
                </li>
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{{ route('diagnostics.index')}}">
                        <span class="c-sidebar-nav-icon"></span>
                        Диагностика
                    </a>
                </li>
            </ul>
        </li>
    </ul>
    <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent"
            data-class="c-sidebar-minimized"></button>
</div>
