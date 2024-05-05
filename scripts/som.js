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
    utterance.rate += 0.5
    window.speechSynthesis.speak(utterance)
})

document.getElementById('velocidademenos').addEventListener('click', function () {
    window.speechSynthesis.cancel()
    utterance.rate -= 0.5
    window.speechSynthesis.speak(utterance)
})

document.getElementById('volumemais').addEventListener('click', function () {
    window.speechSynthesis.cancel()
    utterance.volume += 0.5
    window.speechSynthesis.speak(utterance)
})

document.getElementById('volumemenos').addEventListener('click', function () {
    window.speechSynthesis.cancel()
    utterance.volume -= 0.5
    window.speechSynthesis.speak(utterance)
})