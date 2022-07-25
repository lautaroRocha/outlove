
import {IMAGENES_CARRU, botonCarrusel, cambiarFoto, cambiarCopy} from "./modules/var_carrusel.js";

export let posicion = 0;

botonCarrusel.onclick= () => {
        posicion >= IMAGENES_CARRU.length-1 ? posicion = 0 : posicion ++;
        cambiarFoto();
        cambiarCopy();
        }


