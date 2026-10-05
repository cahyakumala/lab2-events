var flower = document.getElementById("plant");
var message = document.getElementById("message");
var button = document.getElementById("growButton");

button.onclick = function() {

    if (flower.innerHTML == "🌷") {
        flower.innerHTML = "🌻";
        message.innerHTML = "You found a sunflower!";
    } 
    else if (flower.innerHTML == "🌻") {
        flower.innerHTML = "🌹";
        message.innerHTML = "You found a rose!";
    }
    else if (flower.innerHTML == "🌹") {
        flower.innerHTML = "🌼";
        message.innerHTML = "You found a flower!";
    }
    else if (flower.innerHTML == "🌼") {
        flower.innerHTML = "🌸";
        message.innerHTML = "You found a cherry blossom!";
    }
    else {
        flower.innerHTML = "🌷";
        message.innerHTML = "You found a tulip!";
    }

};

document.onkeydown = function(event) {

    if (event.key == "g") {
        document.body.style.backgroundColor = "lightblue";
        message.innerHTML = "The garden changed!";
    }

};