import {imagenCarrusel, IMAGENES_CARRU, botonCarrusel, textoCarru, copyCarru} from "./modules/var_carrusel.js";

let posicion = 0;

botonCarrusel.onclick= () => {
        if (posicion >= IMAGENES_CARRU.length-1){
            posicion = 0;
        }else {
            posicion ++;
        }
        cambiarFoto();
        cambiarCopy();
        }

function cambiarFoto(){
            imagenCarrusel.setAttribute('src' , `images/${IMAGENES_CARRU[posicion]}` )
        }
function cambiarCopy() {
            textoCarru.textContent = copyCarru[posicion];
        }
    