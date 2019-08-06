var markersData = [
    {
        lat: 46.485895,
        lng: 30.723695,
        name: "СТО “Автолюкс”",
        address: "г.Одесса, ул. Иванова 5",
        buttonWrapper: "<button class=\"btn-accent btn-modal\">Записаться</button> <a href='#' class='links-accent'><img src='img/arr.svg' alt=''>Маршрут</a>"
    }
];

var map, infoWindow;

function initMap() {
    var coordinates = new google.maps.LatLng(50.441721, 30.635832);
    var mapOptions = {
        center: coordinates,
        zoom: 8,
        scrollwheel: false,
        disableDefaultUI: false
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(map, "click", function() {
        infoWindow.close();
    });

    // Определяем границы видимой области карты в соответствии с положением маркеров
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markersData.length; i++){

        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;
        var buttonWrapper = markersData[i].buttonWrapper;

        addMarker(latLng, name, address, buttonWrapper);

        // Расширяем границы нашей видимой области, добавив координаты нашего текущего маркера
        bounds.extend(latLng);
    }

    // Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
    map.fitBounds(bounds);

}
google.maps.event.addDomListener(window, "load", initMap);

function addMarker(latLng, name, address, buttonWrapper) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: name,
        icon: 'img/location.png'
    });

    google.maps.event.addListener(marker, "click", function() {

        var contentString = '<div class="infowindow">' +
            '<h3>' + name + '</h3>' +
            '<p>' + address + '</p>' +
            '<div>' + buttonWrapper + '</div>' +
            '</div>';

        infoWindow.setContent(contentString);
        infoWindow.open(map, marker);

    });
}


var markersData2 = [
    {
        lat: 46.485895,
        lng: 30.723695,
        name: "СТО “Автолюкс”",
        address: "г.Одесса, ул. Иванова 5",
        buttonWrapper: "<a href='#' class='links'>Показать на Google карте</a>"
    }
];

var contacts_map, infoWindow2;

function initMap2() {
    var coordinates = new google.maps.LatLng(48.936356, 31.361575);
    var mapOptions = {
        center: coordinates,
        zoom: 11,
        scrollwheel: false,
        disableDefaultUI: false
    };

    map = new google.maps.Map(document.getElementById("contacts_map"), mapOptions);

    infoWindow2 = new google.maps.InfoWindow();

    google.maps.event.addListener(map, "click", function() {
        infoWindow2.close();
    });

    // Определяем границы видимой области карты в соответствии с положением маркеров
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markersData2.length; i++){

        var latLng = new google.maps.LatLng(markersData2[i].lat, markersData2[i].lng);
        var name = markersData2[i].name;
        var address = markersData2[i].address;
        var buttonWrapper = markersData2[i].buttonWrapper;

        addMarker(latLng, name, address, buttonWrapper);

        // Расширяем границы нашей видимой области, добавив координаты нашего текущего маркера
        bounds.extend(latLng);
    }

    // Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
    map.fitBounds(bounds);

}
google.maps.event.addDomListener(window, "load", initMap2);

function addMarker2(latLng, name, address, buttonWrapper) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: name,
        icon: 'img/map.svg'
    });

    google.maps.event.addListener(marker, "click", function() {

        var contentString = '<div class="infowindow">' +
            '<h3>' + name + '</h3>' +
            '<p>' + address + '</p>' +
            '<div>' + buttonWrapper + '</div>' +
            '</div>';

        infoWindow.setContent(contentString);
        infoWindow.open(map, marker);

    });
}