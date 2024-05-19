var url = window.location.href;
var lastIndex = url.lastIndexOf("/")
var pageNumber = url.substring(lastIndex + 1)
var cleanedPageNumber = pageNumber.replace(/^ex/, '');
var numero = parseInt(cleanedPageNumber) + 1;
var numero2 = parseInt(cleanedPageNumber) - 1;
var proximaUrl = url.substring(0, lastIndex + 1) + numero + ".html"
var anteriorUrl = url.substring(0, lastIndex + 1) + numero2 + ".html"
document.getElementById("prox").href = proximaUrl
if (numero2 == 0) {
    document.getElementById("ant").href = "index.html"
} else {
    document.getElementById("ant").href = anteriorUrl
}