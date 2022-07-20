import {imagenCarrusel, IMAGENES_CARRU, botonCarrusel, textoCarru, copyCarru} from "./modules/var_carrusel.js";

let posicion = 0;

// function fadeIn(ele){
//     ele.style.opacity = 0;
//     function tick() {
//       ele.style.opacity = +ele.style.opacity + 0.01;
//       if (ele.style.opacity < 1) {
//         (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 1000)
//       }
//     };
//     tick();
// }

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
function fadeIn(ele){
    ele.style.opacity = 0;
    function tick() {
        ele.style.opacity = +ele.style.opacity + 0.01;
    if (ele.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        };
    }
    tick();
}


