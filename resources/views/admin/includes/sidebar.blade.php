<div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
    <div class="c-sidebar-brand d-lg-down-none">
        <svg class="c-sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
            <use xlink:href="{{ asset('admin/assets/brand/coreui.svg#full') }}"></use>
        </svg>
        <svg class="c-sidebar-brand-minimized" width="46" height="46" alt="CoreUI Logo">
            <use xlink:href="{{ asset('admin/assets/brand/coreui.svg#signet') }}"></use>
        </svg>
    </div>
    <ul class="c-sidebar-nav">
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="index.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('admin/@coreui/icons/sprites/free.svg#cil-speedometer') }}"></use>
                </svg>
                Dashboard<span class="badge badge-info">NEW</span></a>
        </li>
        <li class="c-sidebar-nav-title">Theme</li>
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="colors.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('admin/@coreui/icons/sprites/free.svg#cil-drop') }}"></use>
                </svg>
                Colors</a>
        </li>
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="typography.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('admin/@coreui/icons/sprites/free.svg#cil-pencil') }}"></use>
                </svg>
                Typography</a>
        </li>
        <li class="c-sidebar-nav-title">Components</li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown"><a
                class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('admin/@coreui/icons/sprites/free.svg#cil-puzzle') }}"></use>
                </svg>
                Base</a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/breadcrumb.html"><span
                            class="c-sidebar-nav-icon"></span> Breadcrumb</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/cards.html"><span
                            class="c-sidebar-nav-icon"></span> Cards</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/carousel.html"><span
                            class="c-sidebar-nav-icon"></span> Carousel</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/collapse.html"><span
                            class="c-sidebar-nav-icon"></span> Collapse</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/forms.html"><span
                            class="c-sidebar-nav-icon"></span> Forms</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/jumbotron.html"><span
                            class="c-sidebar-nav-icon"></span> Jumbotron</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/list-group.html"><span
                            class="c-sidebar-nav-icon"></span> List group</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/navs.html"><span
                            class="c-sidebar-nav-icon"></span> Navs</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/pagination.html"><span
                            class="c-sidebar-nav-icon"></span> Pagination</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/popovers.html"><span
                            class="c-sidebar-nav-icon"></span> Popovers</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/progress.html"><span
                            class="c-sidebar-nav-icon"></span> Progress</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/scrollspy.html"><span
                            class="c-sidebar-nav-icon"></span> Scrollspy</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/switches.html"><span
                            class="c-sidebar-nav-icon"></span> Switches</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/tables.html"><span
                            class="c-sidebar-nav-icon"></span> Tables</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/tabs.html"><span
                            class="c-sidebar-nav-icon"></span> Tabs</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="base/tooltips.html"><span
                            class="c-sidebar-nav-icon"></span> Tooltips</a></li>
            </ul>
        </li>
        <li class="c-sidebar-nav-item c-sidebar-nav-dropdown"><a
                class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('admin/@coreui/icons/sprites/free.svg#cil-cursor') }}"></use>
                </svg>
                Buttons</a>
            <ul class="c-sidebar-nav-dropdown-items">
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/buttons.html"><span
                            class="c-sidebar-nav-icon"></span> Buttons</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/button-group.html"><span
                            class="c-sidebar-nav-icon"></span> Buttons Group</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/dropdowns.html"><span
                            class="c-sidebar-nav-icon"></span> Dropdowns</a></li>
                <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="buttons/brand-buttons.html"><span
                            class="c-sidebar-nav-icon"></span> Brand Buttons</a></li>
            </ul>
        </li>
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="{{ route('logout') }}"
               onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="{{ asset('admin/@coreui/icons/sprites/free.svg#cil-pencil') }}"></use>
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
