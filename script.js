//PRIMER ENTREGABLE 

var ans = prompt('¿Querés que te cuenta el cuento de la buena pipa? (si/no)');

for(let i=0; i<3; i++){
    if (ans == 'si' ){
        ans = prompt('No dije que sí, dije que si querés que te cuenta el cuento de la buena pipa');
    }else if(ans == 'no'){
    ans = prompt('¿Seguro que no querés que te cuente el cuento de la buena pipa?');
    }else {
    ans = prompt('Por sí o por no, ¿querés que te cuenta el cuento de la buena pipa? ');
    }
}







//CARRUSEL DE BANNER 
let imagenCarrusel = document.querySelector("#imagen-carrusel")
const imagenesCarru = ["test-uno.png", "test-dos.png", "test-tres.png"];
let botonCarrusel = document.querySelector("#boton-carrusel");
let posicion = 0
let textoCarru = document.querySelector("#copy-carru")
const copyCarru = ["Una aventura te espera", "Todo lo mejor para tus viajes", "A donde la tierra te lleve"]

botonCarrusel.addEventListener('click', pasarFoto);

function pasarFoto(){
    if (posicion >= imagenesCarru.length-1){
        posicion = 0;
    }else {
        posicion ++
    }
    cambiarFoto();
    cambiarCopy();
    }
function cambiarFoto(){
    imagenCarrusel.setAttribute('src' , `images/${imagenesCarru[posicion]}` )
}
function cambiarCopy() {
    textoCarru.textContent = copyCarru[posicion];
}
//DISPLAY DE PRODUCTOS Y SELECCIÓN
{const productos = ["remera1", "remera2", "remera3", "remera4", "remera5", "remera6" ];

const productoSeleccionado = document.querySelector('#producto-seleccion');
const fotosProductos = document.querySelector('.tienda-fotos');
    
for (let i=0; i<productos.length; i++) {
    let nuevaFoto = document.createElement('img');
    nuevaFoto.setAttribute('src', `images/${productos[i]}.png`);
    fotosProductos.appendChild(nuevaFoto);
    nuevaFoto.addEventListener('click', () => 
    productoSeleccionado.setAttribute('src' , `images/${productos[i]}.png`))
};

}






