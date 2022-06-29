
//Clase del objeto del carrito
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

//Clase de los objetos a la venta
class Producto {
    constructor(modelo, precio,link){
        this.modelo = modelo,
        this.precio = precio,
        this.link = link;
    }
}

//Display de productos y selección
const nombreProducto = document.querySelector('#producto-seleccion-nombre');
const productoSeleccionado = document.querySelector('#producto-seleccion');
const fotosProductos = document.querySelector('.tienda-fotos');

//Productos disponibles
const productos = [];

productos.push(remeraNegraMontaña = new Producto("remera negra montaña",  1700, "remera1"));
productos.push(remeraBlancaMontaña = new Producto("remera blanca montaña", 1700, "remera2"));
productos.push(remeraCaminante = new Producto("remera caminante", 1700, "remera3"));
productos.push(remeraEmblema = new Producto("remera emblema", 1700, "remera4"));
productos.push(remeraCaminanteBlanca = new Producto("remera caminante blanca", 1700, "remera5"));
productos.push(remeraNegraMontañaBlanca = new Producto("remera negra montaña blanca", 1700, "remera6"));

//carrito
let datosClientes = document.querySelector("#forma-cliente")
const botonAnadir = document.querySelector("#anadir-carrito");
let carrito = [];

///Modal del carrito

let botonModal = document.querySelector('#boton-modal')
let carritoModal = document.querySelector('#carrito-modal')
let botonCerrarModal = document.querySelector("#cerrar-modal")
let cantidadCompra = document.querySelector("#cantidad-comprada");
let divFotos = document.querySelector("#carrito-flex");
let btnEliminar = document.querySelector('#eli-prod');

//El modelo del producto seleccionado
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
        nombreProducto.textContent = "";
    }
    }

//Crea las cards
//de los productos repasando
//el array
for (let i=0; i<productos.length; i++) {
    let nuevaFoto = document.createElement('img');
    nuevaFoto.setAttribute('src', `images/${productos[i].link}.png`);
    fotosProductos.appendChild(nuevaFoto);
    nuevaFoto.addEventListener('click', () => 
    productoSeleccionado.setAttribute('src' , `images/${productos[i].link}.png`))
    nuevaFoto.addEventListener('click', actualizarNombre)
};

///muestra el total de 
//productos pedidos en el carrito
function sumarCantidad() {
    cantidadCompra.textContent = carrito.reduce( (ac, pedido) => ac + parseInt(pedido.cantidad), 0);
}

//envía img seleccionada al
//carrito
function llenarCarrito(){
    let imagenCompra = document.createElement('img')
    imagenCompra.setAttribute('src', productoSeleccionado.getAttribute('src'));
    divFotos.appendChild(imagenCompra); 
}

//envia los datos del form
//al carrit
function enviarAlCarrito() {
    let talle = document.querySelector("#talle").value;
    let cantidad = document.querySelector("#canti").value;
    let observaciones = document.querySelector("#obs").value;
    let cliente = document.querySelector("#cliente").value;
    let direccion = document.querySelector("#direccion").value;
    
    ///evita que se envíe un pedido
    ///sin producto
    if(nombreProducto.innerText !== ""){
        carrito.push(new Pedido(`${cliente}`, `${direccion}`, `${nombreProducto.textContent}`, `${cantidad}`, `${talle}`,  `${observaciones}`));
        sumarCantidad();
    }else{
            alert('Aún no has seleccionado ningún producto')
        } ;
    
    llenarCarrito();

}

///enviar datos
datosClientes.addEventListener('submit', enviarAlCarrito);

//botones del modal
botonModal.onclick = function() {
    carritoModal.style.display = "block";
  }
botonCerrarModal.onclick = function() {
    carritoModal.style.display = "none";
}
btnEliminar.onclick = function (){
    carrito.pop()
    divFotos.removeChild(divFotos.lastChild)
    sumarCantidad()
}