<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CoreUI CSS -->
    <link rel="stylesheet" href="{{ asset('dashboard/css/style.css') }}" crossorigin="anonymous">
    <link rel="icon" href="{{ asset('main/img/cropped-ipsumLogo-1-32x32.png') }}" sizes="32x32"/>
    <link rel="icon" href="{{ asset('main/img/cropped-ipsumLogo-1-192x192.png') }}" sizes="192x192"/>
    <link rel="apple-touch-icon-precomposed" href="{{ asset('main/img/cropped-ipsumLogo-1-180x180.png') }}"/>
    <title>{{ config('app.name', 'Laravel') }}</title>
</head>
<body class="c-app flex-row align-items-center">
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card-group">
                @yield('content')
            </div>
        </div>
    </div>
</div>

<!-- Optional JavaScript -->
<!-- Popper.js first, then CoreUI JS -->
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/@coreui/coreui/dist/js/coreui.min.js"></script>
</body>
</html>
