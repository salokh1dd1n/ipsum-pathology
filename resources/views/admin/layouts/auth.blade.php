<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CoreUI CSS -->
    <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('dashboard/coreui/css/style.css') }}" crossorigin="anonymous">
    <title>{{ config('app.name', 'Laravel') }}</title>
</head>
<body class="c-app flex-row align-items-center">
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
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
