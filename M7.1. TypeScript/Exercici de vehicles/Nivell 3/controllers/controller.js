"use strict";
let car;
let cars = [];
// Check plate with RegEx
const checkPlate = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/g;
// INPUTS
// Form
const form_car = document.querySelector('.form-car');
const form_wheels = document.querySelector('.form-wheels');
// Car
const xPlate = document.getElementById("plateInput");
const xBrand = document.getElementById("brandInput");
const xColor = document.getElementById("colorInput");
// Wheels
const bnd_wheel_1 = document.getElementById("bnd_wheel_1");
const bnd_wheel_2 = document.getElementById("bnd_wheel_2");
const bnd_wheel_3 = document.getElementById("bnd_wheel_3");
const bnd_wheel_4 = document.getElementById("bnd_wheel_4");
const diam_wheel_1 = document.getElementById("diam_wheel_1");
const diam_wheel_2 = document.getElementById("diam_wheel_2");
const diam_wheel_3 = document.getElementById("diam_wheel_3");
const diam_wheel_4 = document.getElementById("diam_wheel_4");
// Card
const deleteBtn = document.getElementById('deleteIcon');
const editBtn = document.getElementById('editIcon');
// Icons
const icons = document.getElementById('icons');
// CardList
const cardList = document.getElementById('card-wrapper');
const element = document.createElement('div');
// METHODS
function createCar(plate, brand, color, wheel) {
    car = new Car(plate, color, brand);
    cars.push(car);
    return car;
}
class UI {
    addCar(car) {
        // Add a preview card
        element.innerHTML = `
        <div class="card rounded mb-3" >
            <div class="card-header d-flex justify-content-between">
                <div class="col-9">
                    <h4 class="card-title" id="titleCard">${car.plate}</h4>
                    <h6 class="card-subtitle mb-2 text-muted" id="brandColorCard">Brand: ${car.brand} | Color: ${car.color}</h6>
                    </div>
                    <div class="col-1 d-flex align-items-center" id="icons">
                        <a href="#" id="deleteIcon"><i class="fa fa-minus-circle deleteIcon"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `;
        cardList === null || cardList === void 0 ? void 0 : cardList.appendChild(element);
    }
    createCarCard(car) {
        // Remove the preview card, and add a full car card with wheels
        cardList === null || cardList === void 0 ? void 0 : cardList.removeChild(element);
        const newElement = document.createElement('div');
        newElement.innerHTML = `
        <div class="card rounded mb-3" >
            <div class="card-header d-flex justify-content-between">
                <div class="col-9">
                    <h4 class="card-title" id="titleCard">${car.plate}</h4>
                    <h6 class="card-subtitle mb-2 text-muted" id="brandColorCard">Brand: ${car.brand} | Color: ${car.color}</h6>
                    </div>
                    <div class="col-1 d-flex align-items-center" id="icons">
                        <a href="#" id="deleteIcon"><i class="fa fa-minus-circle deleteIcon"></i></a>
                    </div>
                </div>
                <div class="card-body row">
                    <h5 class="card-title" id="wheelsTitleCard">Wheels</h5>
                    <div class="col-9 detailBrandCard" id="detailBrandCard">
                    <p>Brand: ${car.wheels[0].wheelBrand}</p>
                    </div>
                    <div class="col-3 detailDiamCard" id="detailDiamCard">
                    <p>⌀: ${car.wheels[0].diameter}</p>
                    </div>
                </div>

            </div>
        </div>
        `;
        cardList === null || cardList === void 0 ? void 0 : cardList.appendChild(newElement);
    }
    deleteCar(element) {
        if (element.classList.contains('deleteIcon')) {
            element.parentElement.parentElement.parentElement.parentElement.remove();
            this.showMessage("The car was deleted", "info");
            // Removes the last car added from the array
            cars.pop();
            // Check if cars[] is empty (to enable the 'create car' btn)
            if (cars.length === 0) {
                document.getElementById("btn-car").classList.remove("disabled");
                document.getElementById("btn-wheels").classList.add("disabled");
            }
        }
    }
    showMessage(msg, cssClass) {
        // Create the 'div' alert
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(msg));
        // insert it into the DOM
        const container = document.getElementById('alert-container');
        container.appendChild(div);
        // Timer to hide alert
        setTimeout(function () {
            container.removeChild(div);
        }, 3000);
    }
    resetForm() {
        form_car.reset();
        form_wheels.reset();
        setTimeout(function () {
            xPlate.classList.remove("is-valid");
        }, 300);
    }
    checkCards() {
        if (cars.length !== 0) {
            document.getElementById("btn-car").classList.remove("disabled");
            document.getElementById("btn-wheels").classList.add("disabled");
        }
    }
}
// DOM EVENTS
// Capture event on 'create car'
form_car.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUI = new UI();
    // Check the plate with a RegExp | Check the rest as non-empty fields
    if (!checkPlate.test(xPlate.value.toUpperCase())) {
        newUI.showMessage("Please insert a valid plate", "danger");
    }
    else if (xBrand.value === "" || xColor.value === "") {
        newUI.showMessage("Please fill in all the fields", "danger");
    }
    else {
        document.getElementById("plateInput").className = "form-control is-valid";
        // Create a new car and store it
        const car = createCar(xPlate.value.toUpperCase(), xBrand.value, xColor.value);
        document.getElementById("card-wrapper").style.display = "block";
        newUI.showMessage("Now please insert the wheels info", "warning");
        // Disable 'create car' btn until the wheels being added
        document.getElementById("btn-car").classList.add("disabled");
        document.getElementById("btn-wheels").classList.remove("disabled");
        newUI.addCar(car);
        newUI.resetForm();
    }
});
// Capture event on 'delete icon'
cardList.addEventListener('click', (e) => {
    const newUI = new UI();
    newUI.deleteCar(e.target);
});
// Capture event 'create wheels'
form_wheels.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUI = new UI();
    // Retrieve the last car added
    let newCar = cars[cars.length - 1];
    // Array with conditions to check -wheels
    const wheelsCondArray = [
        diam_wheel_1.valueAsNumber == diam_wheel_2.valueAsNumber,
        diam_wheel_1.valueAsNumber == diam_wheel_3.valueAsNumber,
        diam_wheel_1.valueAsNumber == diam_wheel_4.valueAsNumber,
    ];
    if (wheelsCondArray.indexOf(false) !== -1) {
        newUI.showMessage("Wheel sizes do not match...", "danger");
    }
    else {
        newCar.addWheel(new Wheel(diam_wheel_1.valueAsNumber, bnd_wheel_1.value));
        newUI.showMessage("Car successfully created", "success");
        newUI.resetForm();
        newUI.checkCards();
        newUI.createCarCard(newCar);
        console.log(newCar);
    }
});
