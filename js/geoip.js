var map;

function initialize() {
  var mapOptions = {
    zoom: 2,
    center: new google.maps.LatLng(2.8,-187.3),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  map = new google.maps.Map(document.getElementById('map_canvas'),
    mapOptions);

  printpoints();
}

printpoints = function() {
  for (var i = 0; i < ipvisits.length; i++) {
    var jip = ipvisits[i].ip;
    var jlat = ipvisits[i].latitude;
    var jlng = ipvisits[i].longitude;
    var latLng = new google.maps.LatLng(jlat,jlng);
    var marker = new google.maps.Marker({
      title: jip,
      position: latLng,
      map: map
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);