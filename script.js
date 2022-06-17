
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

const nombreProducto = document.querySelector('#producto-seleccion-nombre');

const productos = ["remera1", "remera2", "remera3", "remera4", "remera5", "remera6" ];


const productoSeleccionado = document.querySelector('#producto-seleccion');
const fotosProductos = document.querySelector('.tienda-fotos');


function actualizarNombre() {
    switch (productoSeleccionado.getAttribute('src')){
        case "images/remera1.png":
        nombreProducto.textContent = "remera negra";
        break;
        case "images/remera2.png":
        nombreProducto.textContent = "remera blanca";
        break;
        case "images/remera3.png":
        nombreProducto.textContent = "remera caminante";
        break;
        case "images/remera4.png":
        nombreProducto.textContent = "remera emblema";
        break;
        case "images/remera5.png":
        nombreProducto.textContent = "remera caminante blanca";
        break;
        case "images/remera6.png":
        nombreProducto.textContent = "remera montaña negra blanca";
        break;
        default : 
        nombreProducto.textContent = "producto";
    }
    }
    

for (let i=0; i<productos.length; i++) {
    let nuevaFoto = document.createElement('img');
    nuevaFoto.setAttribute('src', `images/${productos[i]}.png`);
    fotosProductos.appendChild(nuevaFoto);
    nuevaFoto.addEventListener('click', () => 
    productoSeleccionado.setAttribute('src' , `images/${productos[i]}.png`))
    nuevaFoto.addEventListener('click', actualizarNombre)
};









//PASA EL PRODUCTO SELECCIONADO
//AL CARRITO

class Pedido {
    constructor(cliente, direccion, producto, cantidad, talle, observaciones){
        this.cliente = cliente,
        this.direccion = direccion,
        this.producto = producto,
        this.cantidad = cantidad,
        this.talle = talle,
        this.observaciones = observaciones
    }
}

let carrito = {};

class Producto {
    constructor(modelo, talle, cantidad, precio, observaciones, cliente, direccion){
        this.modelo = modelo,
        this.talle = talle,
        this.cantidad = cantidad, 
        this.precio = precio,
        this.observaciones = observaciones,
        this.cliente = cliente,
        this.direccion = direccion
    }
    añadirAlCarro() {
        carrito = new Pedido (this.cliente, this.direccion, this.modelo, this.cantidad, this.talle, this.observaciones)
    }
}

const añadirCarrito = document.querySelector("#añadir-carrito")

