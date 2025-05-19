function loadPage() {
    console.log("Página completamente cargada.");
  }

  window.addEventListener('load', loadPage);

let images = document.getElementsByTagName("img");

for (let img of images) {
    img.addEventListener("mouseover", mouseover);
    img.addEventListener("mouseout", mouseout);
    img.addEventListener("onfocus", onfocus);
    img.addEventListener("onblur", onblur);
}

function mouseover(event) {
    let img = event.target;
    document.getElementById("fullPic-container").style.backgroundImage = "url('" + img.src + "')";
}

function mouseout(event) {
    document.getElementById("fullPic-container").style.backgroundImage = "";
}

 const previewImgs = document.querySelectorAll('.previewImg');
    const contenedorGrande = document.getElementById("fullPic-container");

    previewImgs.forEach(imagen => {
        imagen.addEventListener('focus', function() {
        imagen.style.border = '3px solid white'; 
        contenedorGrande.style.backgroundImage = `url('${imagen.src}')`; 
        contenedorGrande.style.display = 'block';
      });

      imagen.addEventListener('blur', function() {
        imagen.style.border = 'none'; 
        contenedorGrande.style.display = 'block';
        contenedorGrande.style.backgroundImage = '';
        });
    });