var zoomMaisDiv = document.getElementById("zoom+")


zoomMaisDiv.addEventListener("click", function () {

    var elementos = document.querySelectorAll("p, code, li, h2, table, small")


    elementos.forEach(function (elemento) {
        var tamanhoFonteAtual = parseInt(window.getComputedStyle(elemento).fontSize)
        elemento.style.fontSize = (tamanhoFonteAtual * 1.2) + "px" // Aumenta em 20%
    });
});