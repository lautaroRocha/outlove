export let imagenCarrusel = document.
querySelector("#imagen-carrusel")
export let IMAGENES_CARRU = ["test-uno.png", "test-dos.png", "test-tres.png"];
export let botonCarrusel = document.querySelector("#boton-carrusel");
export let textoCarru = document.querySelector("#copy-carru")
export let copyCarru = ["Una aventura te espera", "Todo lo mejor para tus viajes", "A donde la tierra te lleve"]
//FUNCIONES

import { fadeInFast } from './fade.js'
import { posicion } from '../carrusel.js'



export function cambiarFoto(){
    fadeInFast(imagenCarrusel)
    imagenCarrusel.setAttribute('src' , `images/${IMAGENES_CARRU[posicion]}` )
    }
export function cambiarCopy() {
        fadeInFast(textoCarru)
        textoCarru.textContent = copyCarru[posicion];
    }

