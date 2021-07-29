<script src="https://api-maps.yandex.ru/2.1/?apikey=040edb2d-2641-4de2-9817-ebcc63312f54&lang={{ app()->getLocale() }}"
        type="text/javascript"></script>
<script>
    ymaps.ready(init);

    var placemarks = [
                @foreach($clinics as $clinic)
            {
                latitude: {{ $clinic->latitude }},
                longitude: {{ $clinic->longitude }},
                hintContent: "{{ $clinic->address }}",
                balloonContentHeader: "{{ $clinic->title }}",
                balloonContentBody: '<a href="https://maps.yandex.ru/?pt={{ $clinic->longitude }},{{ $clinic->latitude }}&z=18&l=map" target="_blank">{{ $clinic->address }}</a>',
                balloonContentFooter:
                    '<div class="uk-margin-small-top uk-flex uk-flex-center">' +
                    '<a href="tel:+998{{ $clinic->phone_number }}" class="uk-button uk-button-default uk-button-small map__call_button">' +
                    'Позвонить' +
                    '</a>' +
                    '</div>',
            },
            @endforeach
        ],
        geoObjects = [];

    function init() {
        var map = new ymaps.Map('map', {
            center: [41.311081, 69.240562],
            zoom: 12,
            controls: ['zoomControl', 'fullscreenControl'],
            behaviors: ['drag', 'dblClickZoom']
        });

        for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
                {
                    hintContent: placemarks[i].hintContent,
                    balloonContentHeader: placemarks[i].balloonContentHeader,
                    balloonContentBody: placemarks[i].balloonContentBody,
                    balloonContentFooter: placemarks[i].balloonContentFooter,
                });
        }

        var clusterer = new ymaps.Clusterer();

        map.geoObjects.add(clusterer);
        clusterer.add(geoObjects);
    }
</script>
