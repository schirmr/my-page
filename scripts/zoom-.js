var zoomMenosDiv = document.getElementById("zoom-");


zoomMenosDiv.addEventListener("click", function () {

    var elementos = document.querySelectorAll("p, code, li, h2");


    elementos.forEach(function (elemento) {
        var tamanhoFonteAtual = parseInt(window.getComputedStyle(elemento).fontSize);
        elemento.style.fontSize = (tamanhoFonteAtual * 0.8) + "px"; // Aumenta em 20%
    });
});