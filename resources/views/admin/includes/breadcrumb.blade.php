<div class="c-subheader px-3">
    <!-- Breadcrumb-->
    <ol class="breadcrumb border-0 m-0">
        <li class="breadcrumb-item">Admin</li>
        @if(isset($action))
            <li class="breadcrumb-item"><a href="{{ route($route.'.index') }}">{{ $page }}</a></li>
            <li class='breadcrumb-item active'>{{ $action }}</li>
        @else
            <li class="breadcrumb-item active">{{ $page }}</li>
        @endif
    </ol>
</div>
