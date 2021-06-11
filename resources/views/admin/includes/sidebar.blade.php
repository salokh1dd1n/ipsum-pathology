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
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="colors.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-drop') }}"></use>
                </svg>
                Colors</a>
        </li>
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="typography.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-pencil') }}"></use>
                </svg>
                Typography</a>
        </li>
        <li class="c-sidebar-nav-title">Components</li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown"><a
                class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-puzzle') }}"></use>
                </svg>
                Base</a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item">
                    <a class="c-sidebar-nav-link" href="base/breadcrumb.html">
                        <span class="c-sidebar-nav-icon"></span> Breadcrumb
                    </a>
                </li>
            </ul>
        </li>
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="{{ route('logout') }}"
               onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-pencil') }}"></use>
                </svg>
                Logout
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
            </form>
        </li>
    </ul>
    <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent"
            data-class="c-sidebar-minimized"></button>
</div>
