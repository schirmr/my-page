function carregarMenu() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "../mysql-por-uianes/menu.html", true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("menu-placeholder").innerHTML = xhr.responseText
        }
    };
    xhr.send()
}

carregarMenu()