async function fetchcss() {
    if (localStorage.getItem("css") == null) {
    let css = await fetch("style.css")
    let csstext = await css.text()
    document.getElementById("il").innerHTML = csstext
    localStorage.setItem("css",csstext)
    return false
    } else {
        document.getElementById("il").innerHTML = localStorage.getItem("css")
        return true
    }
}
fetchcss()