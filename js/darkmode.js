let botonMode = document.querySelector("#btn-mode")
let hojasCopy = document.querySelectorAll("#hoja")
let bodyTag = document.querySelector("body");

botonMode.onclick = () => {
    modo = bodyTag.getAttribute('class');
    if (modo == "light"){
        bodyTag.setAttribute('class', 'dark')
        hojasCopy.forEach( hoja => hoja.setAttribute('class', 'fondo-hojas-osc'))
    }else {
        bodyTag.setAttribute('class', 'light');
        hojasCopy.forEach( hoja => hoja.setAttribute('class', 'fondo-hojas-claro'));
    }
}

