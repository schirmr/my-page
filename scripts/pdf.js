document.getElementById("pdf").addEventListener("click", function () {
    var body = document.body;
    if (body.classList.contains('dark')) {
        body.classList.toggle('dark')
        gerarpdf()
        setTimeout(function () {
            body.classList.toggle('dark')
            var opcao = document.getElementById('darkmode')
            if (body.classList.contains('dark')) {
                opcao.innerHTML = 'Baixo <br> Contraste'
            } else {
                opcao.innerHTML = 'Alto <br> Contraste'
            }
        }, 500)
    } else {
        gerarpdf()
    }

})
function gerarpdf() {
    var textopdf = document.getElementById('texto')
    var titulo = document.querySelector('#texto h2').innerText
    var options = {
        margin: 20,
        filename: titulo + '.pdf',
        image: { type: 'png', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(textopdf).save()
}