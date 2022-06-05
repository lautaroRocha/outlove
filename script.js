//CARRUSEL DE BANNER 
let imagenCarrusel = document.querySelector("#imagen-carrusel")
const imagenesCarru = ["test-uno.png", "test-dos.png", "test-tres.png"];
let botonCarrusel = document.querySelector("#boton-carrusel");
botonCarrusel.addEventListener('click', pasarFoto);
let posicion = 0
function pasarFoto(){
    if (posicion >= imagenesCarru.length-1){
        posicion = 0;
    }else {
        posicion ++
    }
    cambiarFoto();
    }
function cambiarFoto(){
    imagenCarrusel.setAttribute('src' , `images/${imagenesCarru[posicion]}` )
}


//DISPLAY DE PRODUCTOS Y SELECCIÓN
const productos = ["remera1.jpg", "remera2.jpg", "remera3.jpg", "remera4.jpg", "remera5.jpg", "remera6.jpg" ];

const productoSeleccionado = document.querySelector('#producto-seleccion');
const fotosProductos = document.querySelector('.tienda-fotos');
    
for (let i=0; i<productos.length; i++) {
    let nuevaFoto = document.createElement('img');
    nuevaFoto.setAttribute('src', `images/${productos[i]}`);
    fotosProductos.appendChild(nuevaFoto);
    nuevaFoto.addEventListener('click', () => 
    productoSeleccionado.setAttribute('src' , `images/${productos[i]}`))
};








