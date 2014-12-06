var map;

function initialize() {
  var mapOptions = {
    zoom: 2,
    center: new google.maps.LatLng(0,0)
  };
  map = new google.maps.Map(document.getElementById('map_canvas'),
    mapOptions);

  // Create a <script> tag and set newipvisits.json as the source.
  var script = document.createElement('script');
  script.src = 'http://jeremy.yosemite.edu/~torresm/newipvisits.json';
  document.getElementsByTagName('head')[0].appendChild(script);
  
}


// Loop through the results array and place a marker for each
// set of coordinates.
function ipvisits_callback(results){
  for (var i = 0; i < results.visitors.length; i++) {
    var jip = results.visitors[i].ip;
    var jlat = results.visitors[i].latitude;
    var jlng = results.visitors[i].longitude;
    var latLng = new google.maps.LatLng(jlat, jlng);
    var marker = new google.maps.Marker({
      title: jip,
      position: latLng,
      map: map
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);