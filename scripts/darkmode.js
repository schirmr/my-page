var opcao = document.getElementById('darkmode')
opcao.addEventListener('click', function () {
    var body = document.body;
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
        opcao.innerHTML = 'Baixo <br> Contraste'
    } else {
        opcao.innerHTML = 'Alto <br> Contraste'
    }
})