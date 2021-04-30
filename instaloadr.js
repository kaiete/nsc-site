async function fetchcss() {
    let css = await fetch("style.css")
    document.getElementById("il").innerHTML = await css.text()
    return null
}
fetchcss()