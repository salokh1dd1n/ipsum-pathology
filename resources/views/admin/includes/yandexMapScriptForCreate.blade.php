<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script src="https://api-maps.yandex.ru/2.1/?apikey=040edb2d-2641-4de2-9817-ebcc63312f54&lang=ru_RU"
        type="text/javascript"></script>
<script type="text/javascript">
    function markerLocation(lat, long) {
        $("input[name=latitude]").val(lat); // latitude input val
        $("input[name=longitude]").val(long); // longitude input val
    }

    var address2 = null;
    $('#address').on('keyup', function (e) {
        if ($('#address').val()) {
            $.ajax({
                url: "https://geocode-maps.yandex.ru/1.x/?apikey=040edb2d-2641-4de2-9817-ebcc63312f54&format=json&results=10&ll=69.240562,41.311081&spn=26.0232,39.8916&rspn=1&geocode=" + e.target.value,
                success: function (result) {
                    $('#browsers').empty();
                    $('#addresses').empty();
                    // result.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')
                    result.response.GeoObjectCollection.featureMember.map((el) => {
                        if (el.GeoObject) {
                            address2 = '';
                            if (el.GeoObject.description)
                                address2 += el.GeoObject.description + " "
                            if (el.GeoObject.name)
                                address2 += el.GeoObject.name
                            var geo_coords = el.GeoObject.Point.pos.split(' ');
                            $('#addresses').append(
                                '<a class="list-group-item list-group-item-action" href="#" data-coords="' + geo_coords[0] + "," + geo_coords[1] + '" onclick="setCoord(' + geo_coords[0] + ',' + geo_coords[1] + ',\'' + el.GeoObject.metaDataProperty.GeocoderMetaData.text + '\')">' +
                                el.GeoObject.metaDataProperty.GeocoderMetaData.text +
                                '</a>'
                            );
                        }
                    });
                }
            });
        } else {
            $('#extra-options-group').addClass('d-none');
        }
    })

    // Set Coordinates
    function setCoord(long, lat, text = null) {
        var coords = [lat, long]
        if (text) {
            $('#address').val(text)
        }
        $('#addresses').empty()
        map.setCenter(coords, 17)
        if (myPlacemark) {
            var storage = ymaps.geoQuery([
                myPlacemark
            ])
            storage.removeFromMap(map)
            markerLocation(coords[0], coords[1])
            myPlacemark = new ymaps.Placemark(coords);
            map.geoObjects.add(myPlacemark);
        } else {
            markerLocation(coords[0], coords[1])
            myPlacemark = new ymaps.Placemark(coords);
            map.geoObjects.add(myPlacemark);
        }
    }

    var myPlacemark = null;
    var map = null;
    ymaps.ready(function () {
        map = new ymaps.Map('map', {
            center: [41.311081, 69.240562],
            controls: ["zoomControl"], //, "fullscreenControl"
            behaviors: ['drag'],
            zoom: 11
        });
        @if(old('latitude') && old('longitude'))
            myPlacemark = new ymaps.Placemark([{{ old('latitude') }}, {{ old('longitude') }}]);
        map.geoObjects.add(myPlacemark);
        map.setCenter([{{ old('latitude') }}, {{ old('longitude') }}], 17)
        @endif
        map.events.add('click', function (e) {
            var coords = e.get('coords');
            var address = '';
            markerLocation(coords[0], coords[1]);
            $.ajax({
                url: "https://geocode-maps.yandex.ru/1.x/?apikey=040edb2d-2641-4de2-9817-ebcc63312f54&format=json&ll=69.240562,41.311081&spn=26.0232,39.8916&geocode=" + coords[1] + "," + coords[0],
                success: function (result) {
                    address += result.response.GeoObjectCollection.featureMember[0].GeoObject.description + '.' + ' '
                    address += result.response.GeoObjectCollection.featureMember[0].GeoObject.name
                    $('#address').val(address)
                }
            });
            if (myPlacemark) {
                var storage = ymaps.geoQuery([
                    myPlacemark
                ])
                storage.removeFromMap(map)
                markerLocation(coords[0], coords[1])
                myPlacemark = new ymaps.Placemark(coords);
                map.geoObjects.add(myPlacemark);
                map.setCenter([coords[0], coords[1]], 17)
            } else {
                markerLocation(coords[0], coords[1])
                myPlacemark = new ymaps.Placemark(coords);
                map.geoObjects.add(myPlacemark);
                map.setCenter([coords[0], coords[1]], 17)
            }
            getAddress(coords);

        });

        function getAddress(coords) {
            myPlacemark.properties.set('iconCaption', 'searching...');
            ymaps.geocode(coords).then(function (res) {
                var firstGeoObject = res.geoObjects.get(0);

                myPlacemark.properties
                    .set({
                        // Forming a string with the object's data.
                        iconCaption: [
                            // The name of the municipality or the higher territorial-administrative formation.
                            firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                            // Getting the path to the toponym; if the method returns null, then requesting the name of the building.
                            firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                        ].filter(Boolean).join(', '),
                        // Specifying a string with the address of the object as the balloon content.
                        balloonContent: firstGeoObject.getAddressLine()
                    });
            });
        }
    });
</script>
