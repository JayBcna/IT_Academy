const restaurants = "http://localhost/mapa/api/apiRestaurants.php";
const kindFoods = "http://localhost/mapa/api/apiFoods.php";

$(document).ready(function () {
    var mymap = "";
    getUserPos();
    addFoodSelect();
});

// GET USER LOCATION
function getUserPos() {
    navigator.geolocation.getCurrentPosition(function (location) {
        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
        //  alert(latlng);
        mymap = L.map("mapid").setView(latlng, 16);
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 10,
            maxZoom: 18,
            id: "mapbox/streets-v11",
        }).addTo(mymap);
        let marker = L.marker(latlng)
            .addTo(mymap)
            .bindPopup(
                `Your current position is <br>
            <strong>Lat</strong> ${location.coords.latitude}<br>  <strong>Lon</strong> ${location.coords.longitude} `
            )
            .openPopup();
        console.log(latlng);
    });
}

// RETRIEVE DATA
function addFoodSelect() {
    $.getJSON(restaurants, function (data) {
        let arrFoods = [];
        let uniqueFood = [];

        $.each(data, function (i, prop) {
            arrFoods = prop.kind_food;
            let foods = arrFoods.split(",");

            // Getting unique values -food
            $.each(foods, function (i, prop) {
                if ($.inArray(prop, uniqueFood) === -1) uniqueFood.push(prop);
            });
        });

        for (let i in uniqueFood) {
            $("#placeSelect").append('<option value="' + i + '">' + uniqueFood[i] + "</option>");
        }

        // Get selected kind of food
        $("select").change(function () {
          let foodSelect = "";
          let foodNum = ""
          $("select option:selected").each(function () {
            foodSelect = $(this).text();
            foodNum = $(this).val();
          });
          // console.log(foodSelect);
          // console.log(foodNum);

          if (foodNum) {
            centerLeafletMapOnMarker(mymap);
            showPlaces(foodSelect);
            
          }
        }).trigger("change");

    });
}

function showPlaces(food) {

    // let foodSelect = '';
    let foodSelect = food;

    if (food == "All") {
      foodSelect = ''
    } else {
      foodSelect = food;
    }

    // AJAX Request
    $.ajax({
        url: restaurants,
        type: "POST",
        data: { search: foodSelect },
        success: function (response) {
            let data = JSON.parse(response);

            console.log(response);
            console.log(foodSelect);

            $.each(data, function (i, prop) {

                marker = L.marker([prop.lat, prop.lng]).addTo(mymap);

                marker.bindPopup(`
                      <div class="bindPopup my-1 row d-flex align-items-between" id="">
                      <div class="col-4">
                      <img src="./img/avatars/${prop.photo}" class="bindPopupImg" alt="Restaurant\'s logo">
                      </div>
                      <div class="col-5 mx-2">
                      <strong>${prop.name}</strong><br>
                      Food: ${prop.kind_food}
                      </div>
                      </div>
                `);

              });
        },
    });
}

// Fit bounds when food kind are selected
function centerLeafletMapOnMarker(mymap) {
  // var latLngs = [marker.getLatLng()];
  var latLngs = ([
    [41.98589531573301, 2.8202338556046667],
    [41.97671169933946, 2.8205221391028616]
  ]);
  var markerBounds = L.latLngBounds(latLngs);
  // mymap.fitBounds(markerBounds, 15);
  mymap.fitBounds(markerBounds, 15);
}


// // Function to remove map markers
// function removeMarkers(marker) {
//   mymap.removeLayer(marker);
// };