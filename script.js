let images = document.getElementsByTagName("img");

for (let img of images) {
    img.addEventListener("mouseover", mouseover);
    img.addEventListener("mouseout", mouseout);
}

function mouseover(event) {
    let img = event.target;
    document.getElementById("fullPic-container").style.backgroundImage = "url('" + img.src + "')";
}

function mouseout(event) {
    document.getElementById("fullPic-container").style.backgroundImage = "";
}