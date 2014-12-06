var map;
var service;
var infowindow;
var request;
var modesto = new google.maps.LatLng(37.661389, -120.994444);

function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: modesto,
      zoom: 12
    });

  request = {
    location: modesto,
    radius: 50000,
    keyword: 'comic books'
  };

  infowindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}


function comicSearch() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: modesto,
      zoom: 12
    });

  request = {
    location: modesto,
    radius: 50000,
    keyword: 'comic books'
  };
  service.nearbySearch(request, callback);
}

function vgSearch() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: modesto,
      zoom: 12
    });

  request = {
    location: modesto,
    radius: 50000,
    keyword: 'video games'
  };
  service.nearbySearch(request, callback);
}

function ltSearch() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: modesto,
      zoom: 12
    });

  request = {
    location: modesto,
    radius: 50000,
    keyword: 'laser tag'
  };
  service.nearbySearch(request, callback);
}





function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
