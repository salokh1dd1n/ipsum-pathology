<div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
    <div class="c-sidebar-brand d-lg-down-none">
        <svg class="c-sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
            <use xlink:href="{{ asset('dashboard/assets/brand/coreui.svg#full') }}"></use>
        </svg>
        <svg class="c-sidebar-brand-minimized" width="46" height="46" alt="CoreUI Logo">
            <use xlink:href="{{ asset('dashboard/assets/brand/coreui.svg#signet') }}"></use>
        </svg>
    </div>
    <ul class="c-sidebar-nav">
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="{{ route('news.index') }}">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-newspaper') }}"></use>
                </svg>
                Новости
            </a>
        </li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
            <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-group') }}"></use>
                </svg>
                Специалисты
            </a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{{ route('team.index') }}">
                        <span class="c-sidebar-nav-icon"></span>
                        Специалисты
                    </a>
                </li>
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="{{ route('roles.index') }}">
                        <span class="c-sidebar-nav-icon"></span>
                        Роли
                    </a>
                </li>
            </ul>
        </li>
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="colors.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-hospital') }}"></use>
                </svg>
                Врачи
            </a>
        </li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
            <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-chat-bubble') }}"></use>
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
                    <use xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-filter') }}"></use>
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
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="colors.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-book') }}"></use>
                </svg>
                Лечение
            </a>
        </li>
    </ul>
    <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent"
            data-class="c-sidebar-minimized"></button>
</div>
