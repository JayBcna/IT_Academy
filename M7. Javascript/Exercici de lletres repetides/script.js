// Exercici 1
let myArray1 = ["J", "a", "n", "k", "o", "J", "u", "r", "i", "c"];

function printArray() {
    let a = document.getElementById("ex-1-result");
    for (let i = 0; i < myArray1.length; i++) {
        console.log(myArray1[i]);
        a.innerHTML += myArray1[i] + "<br>";
    }
}

// Exercici 2
let myArray2 = ["A", "L", "E", "J", "3", "A", "N", "D", "R", "O"];
let msg2 = "Partim del nom 'ALEJANDRO'";
const vocal = /A|E|I|O|U/;

function printArray2() {
    let b = document.getElementById("ex-2-result");
    b.innerHTML = msg2 + "<br>";

    for (let i = 0; i < myArray2.length; i++) {
        if (!isNaN(myArray2[i])) {
            b.innerHTML += "Els noms de persones no contenen el número: " + myArray2[i] + "<br>";
            console.log("Els noms de persones no contenen el número: " + myArray2[i]);
        } else if (vocal.test(myArray2[i])) {
            console.log("He trobat la vocal: " + myArray2[i]);
            b.innerHTML += "He trobat la vocal: " + myArray2[i] + "<br>";
        } else {
            console.log("He trobat la consonant: " + myArray2[i]);
            b.innerHTML += "He trobat la consonant: " + myArray2[i] + "<br>";
        }
    }
}

// Exercici 3
// Hace una comparación de cada letra con la anterior.
let myArray3 = ["A", "L", "E", "J", "A", "N", "D", "R", "O"];
let c = document.getElementById("ex-3-result");

function printArray3() {
    let map = myArray3.reduce(function (prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});

    c.innerHTML += JSON.stringify(map);
    console.log(map);
}

// ______________________
// Exercici 3 - Alternativa 2
// function printArray3() {
//     const countChar = new Map();

//     myArray3.forEach(char => {
//         if (countChar.has(char)) {
//             let counter = countChar.get(char);
//             countChar.set(char, counter + 1)
//         } else {
//             countChar.set(char, 1)
//         }
//     })

//     console.log(countChar);

// Exercici 4
let myName = ["J", "a", "n", "k", "o"];
let myLastName = ["J", "u", "r", "i", "c"];
const d = document.getElementById("ex-4-result");

// Concatenar arrays
function combineArrays(arr1, arr2) {
    return arr1.concat(" ").concat(arr2);
}

// Mostrarlo en el documento
function printArray4() {
    d.innerHTML += JSON.stringify(combineArrays(myName, myLastName));
    console.log(combineArrays(myName, myLastName));
}

// Exercici 5
let emailTxt = document.getElementById("emailTxt").textContent;
let bulkEmails = [];
let emails = [];
let reg = new RegExp(/([ña-zA-Z0-9+._-]+@[Ña-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
// ñ/Ñ: añadidas solo para que el resultado sea como en el enunciado.
const e = document.getElementById("ex-5-result");

function emailCollector(txt) {
    return txt.match(reg);
}

function uniq(arr) {
    return Array.from(new Set(arr));
}

function printArray5() {
    emailCollector(emailTxt);
    bulkEmails = emailCollector(emailTxt);
    emails = uniq(bulkEmails);

    for (let i = 0; i < emails.length; i++) {
        console.log(emails[i]); 
        e.innerHTML += emails[i] + "</br>";
    }

}

// ----------------------------------------------
// TOGGLER: SHOW AND HIDE EXERCISES
function showDiv(id) {
    var divs = document.querySelectorAll(".target");

    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }
    var divToShow = document.getElementById(id);
    divToShow.style.display = "block";
}
