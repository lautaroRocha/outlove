let preferenciaModo = localStorage.getItem('mode');

let botonMode = document.querySelector("#btn-mode")
let hojasCopy = document.querySelectorAll("#hoja")
let bodyTag = document.querySelector("body");

//recuerda preferencia de modo
window.onload = () => {
    if (preferenciaModo == "dark"){
        bodyTag.setAttribute('class', 'dark')
        hojasCopy.forEach( hoja => hoja.setAttribute('class', 'fondo-hojas-osc'))
}else{
        bodyTag.setAttribute('class', 'light')
        hojasCopy.forEach( hoja => hoja.setAttribute('class', 'fondo-hojas-claro'))
}
}
//tooglea entre modos
 botonMode.onclick = () => {
    modo = bodyTag.getAttribute('class');
    if (modo == "light"){
        localStorage.setItem('mode', "dark")
        bodyTag.setAttribute('class', 'dark')
        hojasCopy.forEach( hoja => hoja.setAttribute('class', 'fondo-hojas-osc'))
    }else if (modo == "dark"){
        localStorage.setItem('mode', "light")
        bodyTag.setAttribute('class', 'light');
        hojasCopy.forEach( hoja => hoja.setAttribute('class', 'fondo-hojas-claro'))
    }
}



