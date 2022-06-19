//CARRUSEL DE BANNER 
{
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
}
///////////
//DISPLAY DE PRODUCTOS Y SELECCIÓN
const nombreProducto = document.querySelector('#producto-seleccion-nombre');
const productoSeleccionado = document.querySelector('#producto-seleccion');
const fotosProductos = document.querySelector('.tienda-fotos');

//Función que muestra el dato
//del modelo del producto en pantalla
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
    


//////////////////////////
//PASA EL PRODUCTO SELECCIONADO
//AL CARRITO

//clase del objeto del carrito
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

//clase de los objetos a la venta
class Producto {
    constructor(modelo, precio,link){
        this.modelo = modelo,
        this.precio = precio,
        this.link = link;
    }
}

    let remeraNegraMontaña = new Producto("remera negra montaña",  1700, "remera1");
    let remeraBlancaMontaña = new Producto("remera blanca montaña", 1700, "remera2");
    let remeraCaminante = new Producto("remera caminante", 1700, "remera3");
    let remeraEmblema = new Producto("remera emblema", 1700, "remera4");
    let remeraCaminanteBlanca = new Producto("remera caminante blanca", 1700, "remera5");
    let remeraNegraMontañaBlanca = new Producto("remera negra montaña blanca", 1700, "remera6");
        


//Bucle que crea las cards
//de los productos repasando
//el array
const productos = [remeraNegraMontaña,remeraBlancaMontaña,remeraCaminante,remeraEmblema,remeraCaminanteBlanca, remeraNegraMontañaBlanca];
for (let i=0; i<productos.length; i++) {
    let nuevaFoto = document.createElement('img');
    nuevaFoto.setAttribute('src', `images/${productos[i].link}.png`);
    fotosProductos.appendChild(nuevaFoto);
    nuevaFoto.addEventListener('click', () => 
    productoSeleccionado.setAttribute('src' , `images/${productos[i].link}.png`))
    nuevaFoto.addEventListener('click', actualizarNombre)
};

////////////
//FUNCION PARA PASAR
//EL PEDIDO AL CARRITO

const botonAnadir = document.querySelector("#anadir-carrito");

let carrito = {};

function enviarAlCarrito() {
    
    let talle = document.querySelector("#talle").value;
    let cantidad = document.querySelector("#canti").value;
    let observaciones = document.querySelector("#obs").value;
    let cliente = document.querySelector("#cliente").value;
    let direccion = document.querySelector("#direccion").value;

    carrito = new Pedido(`${cliente}`, `${direccion}`, `${nombreProducto.textContent}`, `${cantidad}`, `${talle}`,  `${observaciones}`);
}


botonAnadir.addEventListener('click', enviarAlCarrito);