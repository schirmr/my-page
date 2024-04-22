document.getElementById("pptx").addEventListener("click", function () {
    let pptx = new PptxGenJS()
    pptx.layout = "LAYOUT_WIDE"
    var titulo = document.querySelector('#texto h2').innerText
    pptx.defineSlideMaster({
        title: titulo,
        background: { color: "FFFFFF" },
        objects: [
            { line: { x: 3.5, y: 1.0, w: 6.0, line: { color: "#8C52FF", width: 5 } } },
            { rect: { x: 0.0, y: 5.3, w: "100%", h: 0.75, fill: { color: "F1F1F1" } } },
            { image: { x: 11.3, y: 6.4, w: 1.67, h: 0.75, path: "../assets/images/logoMaior.png" } },
        ],
        slideNumber: { x: 0.3, y: "90%" },
    })
    let slide = pptx.addSlide({ masterName: "PLACEHOLDER_SLIDE" })
    let tituloprops = {
        x: 1, y: 1, color: "363636", fill: { color: "F1F1F1" },
        align: pptx.AlignH.center
    }
    slide.addText(titulo, tituloprops)
    const elementos = document.querySelectorAll('#texto > *')
    const elementosFiltrados = Array.from(elementos).filter(elemento => elemento.tagName !== 'BR' && elemento.tagName !== 'H2')
    let textboxOpts = { x: 1, y: 1, color: "363636" }
    elementosFiltrados.forEach(elemento => {
        if (elemento.tagName.toLowerCase() === 'img') {
            let slide = pptx.addSlide()
            const src = elemento.getAttribute('src')
            slide.addImage({ path: src })
        } else if (elemento.tagName.toLowerCase() === 'table') {
            let slide = pptx.addSlide()
            const linhas = []
            elemento.querySelectorAll('tr').forEach(tr => {
                const linha = []
                tr.querySelectorAll('td').forEach(td => {
                    linha.push(td.textContent.trim())
                })
                linhas.push(linha)
            })
            slide.addTable(linhas, { x: 0.5, y: 3.5, w: 9, h: 1 })
        }
        else {
            let slide = pptx.addSlide()
            slide.addText(elemento.textContent.trim(), textboxOpts)
        }
    })
    pptx.writeFile({ fileName: titulo + ".pptx" })
})