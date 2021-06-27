$(document).ready(function () {
    callJokes();
    swap();
});

function callJokes() {
    // API
    const API = "http://api.icndb.com/jokes/random";
    const idCard = document.querySelector("#idCard");
    const contentCard = document.querySelector("#contentCard");

    fetch(`${API}/random`)
        .then((response) => response.json())
        .then((random) => {
            idCard.innerHTML = `Joke #${random.value.id}`;
            contentCard.innerHTML = `${random.value.joke}`;
        });
}

// Calling API from btn
$("#jokes-btn").click(function (e) {
    e.preventDefault();
    callJokes();
    swap();
});

// Swap image header
function swap() {
    let numimages = 10;
    rndimg = [
        "./img/1.jpg",
        "./img/2.jpg",
        "./img/3.jpg",
        "./img/4.jpg",
        "./img/5.jpg",
        "./img/6.jpg",
        "./img/7.jpg",
        "./img/8.jpg",
        "./img/9.jpg",
        "./img/10.jpg",
    ];
    x = Math.floor(Math.random() * numimages);
    document.getElementById("img-header").src = rndimg[x];
}