async function fetchcss() {
    if (localStorage.getItem("css") == null) {
    let css = await fetch("style.css")
    document.getElementById("il").innerHTML = await css.text()
    localStorage.setItem("css",await css.text())
    return false
    } else {
        document.getElementById("il").innerHTML = localStorage.getItem("css")
        return true
    }
}
fetchcss()