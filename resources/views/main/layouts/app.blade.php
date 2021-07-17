<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ipsum</title>
    <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{{ asset('main/css/style.min.css') }}">
    <!-- fonts -->
    <link rel="stylesheet" href="{{ asset('main/fonts/stylesheet.css') }}"/>
</head>
<body>
<div class="wrapper">
    @include('main.includes.header')
    @yield('content')
    @include('main.includes.footer')

</div>

<script src="https://api-maps.yandex.ru/2.1/?apikey=0d2db804-33db-441d-a54d-8fc8fa45e591&lang=ru_RU"
        type="text/javascript"></script>
<script src="{{ asset('main/js/app.min.js') }}"></script>
</body>
</html>
