import { preferenciaModo, botonMode, hojasCopy, bodyTag } from "./modules/var_darkmode.js"

    if (preferenciaModo === "dark"){
        bodyTag.setAttribute('class', 'dark')
        hojasCopy.forEach( hoja => hoja.setAttribute('class', 'fondo-hojas-osc'))
    }else {
        bodyTag.setAttribute('class', 'light')
        hojasCopy.forEach( hoja => hoja.setAttribute('class', 'fondo-hojas-claro'))
    }

 botonMode.onclick = () => {
    let modo = bodyTag.getAttribute('class');
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



