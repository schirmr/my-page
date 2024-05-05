var xhr = new XMLHttpRequest();
xhr.open("GET", "../mysql-por-uianes/menu.html", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var responseText = xhr.responseText;
        document.getElementById("menu-placeholder").innerHTML = responseText;

        var url = window.location.href;
        var lastIndex = url.lastIndexOf("/");
        var pageNumber = parseInt(url.substring(lastIndex + 1));
        var proximaUrl = url.substring(0, lastIndex + 1) + (pageNumber + 1) + ".html";
        var anteriorUrl = url.substring(0, lastIndex + 1) + (pageNumber - 1) + ".html";

        document.getElementById("prox").href = proximaUrl;
        document.getElementById("ant").href = (pageNumber == 0) ? "index.html" : anteriorUrl;
    }
};
xhr.send();