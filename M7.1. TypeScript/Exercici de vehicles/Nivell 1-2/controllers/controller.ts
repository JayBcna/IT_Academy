let car: Car;
let cars: Car[] = [];
let wheels: Wheel[] = [];

// Check plate with RegEx
const checkPlate = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/g

// INPUTS
// Form
const form_car = document.querySelector('.form-car') as HTMLFormElement;
const form_wheels  = document.querySelector('.form-wheels') as HTMLFormElement;
// Car
const xPlate = document.getElementById("plateInput") as HTMLInputElement;
const xBrand = document.getElementById("brandInput") as HTMLInputElement;
const xColor = document.getElementById("colorInput") as HTMLInputElement;
// Wheels
const bnd_wheel_1 = document.getElementById("bnd_wheel_1") as HTMLInputElement;
const bnd_wheel_2 = document.getElementById("bnd_wheel_2") as HTMLInputElement;
const bnd_wheel_3 = document.getElementById("bnd_wheel_3") as HTMLInputElement;
const bnd_wheel_4 = document.getElementById("bnd_wheel_4") as HTMLInputElement;
const diam_wheel_1 = document.getElementById("diam_wheel_1") as HTMLInputElement;
const diam_wheel_2 = document.getElementById("diam_wheel_2") as HTMLInputElement;
const diam_wheel_3 = document.getElementById("diam_wheel_3") as HTMLInputElement;
const diam_wheel_4 = document.getElementById("diam_wheel_4") as HTMLInputElement;

// METHODS
function createCar(plate: string, brand: string, color: string) {
    car = new Car(plate, color, brand);
    cars.push(car)

    function printCarData() {
        // @ts-ignore: Object is possibly 'null'.
        document.getElementById('titleCard')?.innerHTML = xPlate.value;
        // @ts-ignore: Object is possibly 'null'.
        document.getElementById('brandColorCard')?.innerHTML = `${xBrand.value} | ${xColor.value}`;
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
form_car.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    
    // Check the plate with a RegExp
    if (!checkPlate.test(xPlate.value) || xPlate.value === "") {
        // @ts-ignore: Object is possibly 'null'.
        document.getElementById("plateInput").className =
        "form-control is-invalid";
        alert("Please insert a valid plate")
    } else {
        // @ts-ignore: Object is possibly 'null'.
        document.getElementById("plateInput").className =
        "form-control is-valid";
        // If values OK, it creates a new 'car'
        createCar(xPlate.value, xBrand.value, xColor.value);
        showCard();
        alert('Please insert the wheels info')
    }

    console.log(cars[cars.length - 1])

});
    
// Retrieve WHEELS form data
form_wheels.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    // Retrieve the last car added
    let newCar = cars[cars.length - 1];

    // Stringify the object 'wheels'
    let bnd = JSON.stringify(bnd_wheel_1.value)
    let diam = JSON.stringify(diam_wheel_1.valueAsNumber)

    let prefixBrand = document.getElementById('detailBrandCard');
    let prefixDiam = document.getElementById('detailDiamCard');

    // Array with conditions to check -wheels
    const wheelsCondArray: boolean[] = [
        diam_wheel_1.valueAsNumber == diam_wheel_2.valueAsNumber,
        diam_wheel_1.valueAsNumber == diam_wheel_3.valueAsNumber,
        diam_wheel_1.valueAsNumber == diam_wheel_4.valueAsNumber,
    ]

    if (wheelsCondArray.indexOf(false) !== -1) {
        alert("sizes do not match...")
    } else {
        newCar.addWheel(new Wheel(diam_wheel_1.valueAsNumber , bnd_wheel_1.value))
        console.log("sizes OK!")
        for (let i = 1; i < 5; i++) {
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