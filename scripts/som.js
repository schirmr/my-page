textoElement = document.getElementById('texto');
texto = textoElement.innerText || textoElement.textContent;
utterance = new SpeechSynthesisUtterance(texto);
utterance.rate = 1;
utterance.volume = 1;

document.getElementById("ouvir").addEventListener("click", function () {
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance);
})

document.getElementById('pausar').addEventListener('click', function () {
    window.speechSynthesis.pause()
});

document.getElementById('retomar').addEventListener('click', function () {
    window.speechSynthesis.resume()
});

document.getElementById('velocidademais').addEventListener('click', function () {
    window.speechSynthesis.cancel()
    utterance.rate += 0.1
    window.speechSynthesis.speak(utterance)
})

document.getElementById('velocidademenos').addEventListener('click', function () {
    window.speechSynthesis.cancel()
    utterance.rate = Math.max(0.1, utterance.rate - 0.1) // Garantir que não fique menor que 0.1
    window.speechSynthesis.speak(utterance)
})

document.getElementById('volumemais').addEventListener('click', function () {
    window.speechSynthesis.cancel()
    utterance.volume += Math.min(1, utterance.volume + 0.1) // Garantir que não ultrapasse 1
    window.speechSynthesis.speak(utterance)
})

document.getElementById('volumemenos').addEventListener('click', function () {
    window.speechSynthesis.cancel()
    utterance.volume = Math.max(0.1, utterance.volume - 0.1) // Garantir que não fique menor que 0 (se quiser que exista volume 0, só mudar o 0.1 para 0)
    window.speechSynthesis.speak(utterance)
})