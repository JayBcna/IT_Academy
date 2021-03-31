// EXERCICI 1
let msg = document.getElementById("btn-1");
msg.onclick = function () {
    console.log("Hola mundo");
    toggleHide();
};

// EXERCICI 2
msg = document.getElementById("btn-2");
msg.onclick = function () {
    alert("Me llamo Janko Juric");
    toggleHide();
};

// EXERCICI 3
let name = "Janko";
let lastName = "Juric";
msg = document.getElementById("btn-3");
msg.onclick = function () {
    console.log(`${name} ${lastName}`);
    toggleHide();
};

// EXERCICI 4
let numA = 34;
let numB = 56;
msg = document.getElementById("btn-4").addEventListener("click", function () {
    let result = numA + numB;
    console.log(`La suma entre ${numA} y ${numB} es ${result}`);
    toggleHide();
});

// EXERCICI 5
msg = document.getElementById("btn-5").addEventListener("click", function () {
    let nota_examen = numA + numB;

    if (nota_examen >= 50) {
        alert(`Has aprobado con un ${nota_examen / 10}!`);
    } else {
        alert(`Ohh has suspendido el examen con un ${nota_examen / 10}`);
    }
    toggleHide();
});

// EXERCICI 6 - PT 1
function changeColor() {
    let x = document.getElementById("badge");

    if (x.classList.contains("bg-primary")) {
        x.classList.remove("bg-primary");
        x.classList.add("bg-success");
        document.getElementById("badge").innerHTML = "verd";
    } else {
        x.classList.add("bg-primary");
        x.classList.remove("bg-success");
        document.getElementById("badge").innerHTML = "blau";
    }
}

// EXERCICI 6 - PT 2
function changeLetter() {
    let x = document.getElementById("ex-6-text").innerHTML;
    x = x.replace(/o/g, "u");
    document.getElementById("ex-6-text").innerHTML = x;
}

// EXERCICI 7
function showPosition() {
    let arrayElem = ["taula", "cadira", "ordinador", "libreta"];
    let x = document.getElementById("result");

    for (i = 0; i < arrayElem.length; i++) {
        x.innerHTML += "L'objecte " + arrayElem[i] + " està a la posició " + i + "</br>";
    }
}

// EXERCICI 8
function getHistory() {
    return document.getElementById("history-value").innerText;
}
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}
function getOutput() {
    return document.getElementById("output-value").innerText;
}
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}
// Separador de miles
function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("es-ES");
    return value;
}

// Remoción del separador de miles para operar con el número
function reverseNumberFormat(num){
	return Number(num.replaceAll(/\./g,''));
}

// Seleccón del operador
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                //if output has a value
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for (i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
        var output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            //if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}

// ----------------------------------------------
// TOGGLER FUNCTIONS
// Hide all
function toggleHide() {
    document.getElementById("ex-6").style.display = "none";
    document.getElementById("ex-7").style.display = "none";
    document.getElementById("ex-8").style.display = "none";
}

function toggleHideEx6() {
    var x = document.getElementById("ex-6");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    document.getElementById("ex-7").style.display = "none";
    document.getElementById("ex-8").style.display = "none";
}

function toggleHideEx7() {
    var x = document.getElementById("ex-7");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    document.getElementById("ex-6").style.display = "none";
    document.getElementById("ex-8").style.display = "none";
}

function toggleHideEx8() {
    var x = document.getElementById("ex-8");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    document.getElementById("ex-6").style.display = "none";
    document.getElementById("ex-7").style.display = "none";
}
