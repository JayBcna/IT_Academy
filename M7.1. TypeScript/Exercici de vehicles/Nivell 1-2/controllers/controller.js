"use strict";
var car;
var cars = [];
var wheels = [];
/* @ts-ignore */
// Check plate with RegEx
var checkPlate = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/g;
// INPUTS
// Form
var form_car = document.querySelector('.form-car');
var form_wheels = document.querySelector('.form-wheels');
// Car
var xPlate = document.getElementById("plateInput");
var xBrand = document.getElementById("brandInput");
var xColor = document.getElementById("colorInput");
// Wheels
var bnd_wheel_1 = document.getElementById("bnd_wheel_1");
var bnd_wheel_2 = document.getElementById("bnd_wheel_2");
var bnd_wheel_3 = document.getElementById("bnd_wheel_3");
var bnd_wheel_4 = document.getElementById("bnd_wheel_4");
var diam_wheel_1 = document.getElementById("diam_wheel_1");
var diam_wheel_2 = document.getElementById("diam_wheel_2");
var diam_wheel_3 = document.getElementById("diam_wheel_3");
var diam_wheel_4 = document.getElementById("diam_wheel_4");
// METHODS
function createCar(plate, brand, color) {
    car = new Car(plate, color, brand);
    cars.push(car);
    function printCarData() {
        var _a, _b;
        // @ts-ignore: Object is possibly 'null'.
        (_a = document.getElementById('titleCard')) === null || _a === void 0 ? void 0 : _a.innerHTML = xPlate.value;
        // @ts-ignore: Object is possibly 'null'.
        (_b = document.getElementById('brandColorCard')) === null || _b === void 0 ? void 0 : _b.innerHTML = xBrand.value + " | " + xColor.value;
    }
    printCarData();
}
// Forms
function showCard() {
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById("form-car").style.display = "none";
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById("card-wrapper").style.display = "block";
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById("form-wheels").style.display = "block";
}
// Retrieve CAR form data
form_car.addEventListener("submit", function (e) {
    e.preventDefault();
    // Check the plate with a RegExp
    if (!checkPlate.test(xPlate.value) || xPlate.value === "") {
        // @ts-ignore: Object is possibly 'null'.
        document.getElementById("plateInput").className =
            "form-control is-invalid";
        alert("Please insert a valid plate");
    }
    else {
        // @ts-ignore: Object is possibly 'null'.
        document.getElementById("plateInput").className =
            "form-control is-valid";
        // If values OK, it creates a new 'car'
        createCar(xPlate.value, xBrand.value, xColor.value);
        showCard();
        alert('Please insert the wheels info');
    }
    console.log(cars[cars.length - 1]);
});
// Retrieve WHEELS form data
form_wheels.addEventListener("submit", function (e) {
    e.preventDefault();
    // Retrieve the last car added
    var newCar = cars[cars.length - 1];
    // Stringify the object 'wheels'
    var bnd = JSON.stringify(bnd_wheel_1.value);
    var diam = JSON.stringify(diam_wheel_1.valueAsNumber);
    var prefixBrand = document.getElementById('detailBrandCard');
    var prefixDiam = document.getElementById('detailDiamCard');
    // Array with conditions to check -wheels
    var wheelsCondArray = [
        diam_wheel_1.valueAsNumber == diam_wheel_2.valueAsNumber,
        diam_wheel_1.valueAsNumber == diam_wheel_3.valueAsNumber,
        diam_wheel_1.valueAsNumber == diam_wheel_4.valueAsNumber,
    ];
    if (wheelsCondArray.indexOf(false) !== -1) {
        alert("sizes do not match...");
    }
    else {
        newCar.addWheel(new Wheel(diam_wheel_1.valueAsNumber, bnd_wheel_1.value));
        console.log("Wheels size OK!");
        for (var i = 1; i < 5; i++) {
            // @ts-ignore: Object is possibly 'null'.
            prefixBrand.innerHTML += "Brand #" + i + ": " + bnd + "<br>";
            // @ts-ignore: Object is possibly 'null'.
            prefixDiam.innerHTML += "⌀: " + diam + "<br>";
        }
        // Hide the wheels form
        // @ts-ignore: Object is possibly 'null'.
        document.getElementById("form-wheels").style.display = "none";
    }
});
