import { fadeIn } from './modules/fade.js'


import {imagenCarrusel, IMAGENES_CARRU, botonCarrusel, textoCarru, copyCarru} from "./modules/var_carrusel.js";

let posicion = 0;

botonCarrusel.onclick= () => {
        posicion >= IMAGENES_CARRU.length-1 ?posicion = 0 : posicion ++;
        cambiarFoto();
        cambiarCopy();
        }

function cambiarFoto(){
        fadeIn(imagenCarrusel)
        imagenCarrusel.setAttribute('src' , `images/${IMAGENES_CARRU[posicion]}` )
        }
function cambiarCopy() {
            fadeIn(textoCarru)
            textoCarru.textContent = copyCarru[posicion];
        }


