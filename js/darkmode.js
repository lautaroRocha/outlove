let botonMode = document.querySelector("#btn-mode")

let bodyTag = document.querySelector("body");

function cambiarModo() {
    let modo = bodyTag.getAttribute('class');
    if (modo == "light"){
        bodyTag.setAttribute('class', 'dark')
    }else {
        bodyTag.setAttribute('class', 'light')
    }
}

botonMode.addEventListener('click', cambiarModo)