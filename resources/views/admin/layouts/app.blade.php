<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- CoreUI CSS -->
    <link rel="stylesheet" href="{{ asset('dashboard/css/style.css') }}" crossorigin="anonymous">
{{--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">--}}
    <link rel="stylesheet" href="{{ asset('dashboard/css/perfect-scrollbar.min.css') }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
</head>
<body class="c-app">

@include('admin.includes.sidebar')
<div class="c-wrapper c-fixed-components">
    @include('admin.includes.header')
    <div class="c-body">
        <main class="c-main">
            <div class="container-fluid">
                <div class="fade-in">
                    @include('admin.includes.alerts')
                    @yield('content')
                </div>
            </div>
        </main>
    </div>
</div>

<!-- Optional JavaScript -->
<!-- Popper.js first, then CoreUI JS -->
<script src="{{ asset('dashboard/js/coreui.bundle.min.js') }}"></script>
<script src="{{ asset('dashboard/js/svgxuse.min.js') }}"></script>
<script src="{{ asset('dashboard/js/perfect-scrollbar.min.js') }}"></script>
@stack('scripts')
</body>
</html>
