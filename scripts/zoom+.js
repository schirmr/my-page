var zoomMaisDiv = document.getElementById("zoom+");

zoomMaisDiv.addEventListener("click", function () {
    var elementos = document.querySelectorAll("p, code, li, h2, table, small, em");

    elementos.forEach(function (elemento) {
        var tamanhoFonteAtual = parseInt(window.getComputedStyle(elemento).fontSize);
        var novoTamanhoFonte = tamanhoFonteAtual * 1.2; // Aumenta em 20%
        var novaAlturaLinha = novoTamanhoFonte * 1.4; 

        elemento.style.fontSize = novoTamanhoFonte + "px";
        elemento.style.lineHeight = novaAlturaLinha + "px";
    });
});
