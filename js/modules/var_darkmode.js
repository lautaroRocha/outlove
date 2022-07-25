export let preferenciaModo = localStorage.getItem('mode');
export let botonMode = document.querySelector("#btn-mode")
export let hojasCopy = document.querySelectorAll("#hoja")
export let bodyTag = document.querySelector("body");

export function setDark(){
    bodyTag.setAttribute('class', 'dark')
    hojasCopy.forEach( hoja => hoja.setAttribute('class', 'fondo-hojas-osc'))
    
}

export function setLight(){
    bodyTag.setAttribute('class', 'light')
    hojasCopy.forEach( hoja => hoja.setAttribute('class', 'fondo-hojas-claro'))
}

export function persistirDark(){
    setDark()
    localStorage.setItem('mode', "dark");
}

export function persistirLight(){
    setLight()
    localStorage.setItem('mode', "light")
}

