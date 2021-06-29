// Map
var mymap = L.map("mapid").setView([41.897376581642995, 12.474261547577031], 17);

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution: 'Map data &copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken: "your.mapbox.access.token",
}).addTo(mymap);

// Custom marker
var marker = L.icon({
    iconUrl: "./img/markers/characters/super-mario-w.png",
    iconSize: [50, 50], // icon size
    shadowSize: [50, 64], // shadow size
});

mymap.on("click", function (e) {
    onLocationFound(e)
});

var gpsMarker = null;

// Funtion to set markers to new location
function onLocationFound(e) {
  var popupContent = `
  <b>La coordenada geogràfica és:</b><br>
  ${e.latlng.lat}, ${e.latlng.lng}`;

  if (gpsMarker == null) {
    gpsMarker = L.marker(e.latlng, { icon: marker }).addTo(mymap);
    gpsMarker.bindPopup(popupContent).openPopup();
    }
  else {
   gpsMarker.getPopup().setContent(popupContent);   
   gpsMarker.setLatLng(e.latlng);
  }
}

