// MAP
var mymap = L.map("mapid").setView([41.387104079934616, 2.170030643208196], 16);

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution: 'Map data &copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken: "your.mapbox.access.token",
}).addTo(mymap);

// MARKER AND POP-UP
L.marker([41.387042464186216, 2.166038034892119]).addTo(mymap).bindPopup("<b>Restaurante Cent Focs</b><br>Calle Balmes, 16<br>08007 Barcelona");