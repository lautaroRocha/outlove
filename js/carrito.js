//Clase del objeto del carrito
class Pedido {
    constructor(cliente, direccion, producto, cantidad, talle, observaciones, link){
        this.cliente = cliente,
        this.direccion = direccion,
        this.producto = producto,
        this.cantidad = cantidad,
        this.talle = talle,
        this.observaciones = observaciones
        this.link = link;
    }
}
//Clase de los objetos a la venta
class Producto {
    constructor(clase, modelo, precio,link){
        this.clase = clase;
        this.modelo = modelo,
        this.precio = precio,
        this.link = link;
    }
}

//Display de productos y selección
const nombreProducto = document.querySelector('#producto-seleccion-nombre');
const productoSeleccionado = document.querySelector('#producto-seleccion');
const fotosProductos = document.querySelector('.tienda-fotos');
const filtroSeleccion = document.querySelector("#filtro");


//Productos disponibles
let PRODUCTOS = [];
{
PRODUCTOS.push(remeraNegraMontaña = new Producto("remera", "remera negra montaña",  1700, "images/remera1.png"));
PRODUCTOS.push(remeraBlancaMontaña = new Producto("remera", "remera blanca montaña", 1700, "images/remera2.png"));
PRODUCTOS.push(remeraCaminante = new Producto("remera", "remera caminante", 1700, "images/remera3.png"));
PRODUCTOS.push(remeraEmblema = new Producto("remera", "remera emblema", 1700, "images/remera4.png"));
PRODUCTOS.push(remeraCaminanteBlanca = new Producto("remera", "remera caminante blanca", 1700, "images/remera5.png"));
PRODUCTOS.push(remeraNegraMontañaBlanca = new Producto("remera", "remera negra montaña blanca", 1700, "images/remera6.png"));
PRODUCTOS.push(botaMarronAlta = new Producto("calzado", "bota marrón alta", 4000, "images/bota1.png") )
PRODUCTOS.push(botaGrisBaja = new Producto("calzado", "botín gris topo", 3500, "images/bota2.png"));
PRODUCTOS.push(botaNegraAlta = new Producto("calzado", "bota negra alta", 4000, "images/bota3.png"));
PRODUCTOS.push(gorroAustraliano = new Producto("gorro", "gorro australiano", 2000, "images/hat1.png"))
PRODUCTOS.push(gorraMontana = new Producto("gorro", "gorra montana", 1500, "images/hat2.png"));
PRODUCTOS.push(gorroFrio = new Producto("gorro", "gorro invierno", 4000, "images/hat3.png"))
}

//carrito
let datosClientes = document.querySelector("#forma-cliente")
let CARRITO = [];

///Modal del carrito

let botonModal = document.querySelector('#boton-modal')
let carritoModal = document.querySelector('#carrito-modal')
let botonCerrarModal = document.querySelector("#cerrar-modal")
let cantidadCompra = document.querySelector("#cantidad-comprada");
let divFotos = document.querySelector("#carrito-flex");
let btnEliminar = document.querySelector('#eli-prod');

//El modelo del producto seleccionado
function actualizarNombre() {
    objetoElegido = PRODUCTOS.find(prod => prod.link == productoSeleccionado.getAttribute('src'))
    nombreProducto.textContent = objetoElegido.modelo;
}

//Crea las cards
//de los productos repasando
//el array

let filtroGuardado = localStorage.getItem('filtro');
let fondoTienda = document.querySelector("#fondo-tienda")
function filtrar(){
    fondoTienda.style.display = "none";
        if (filtroSeleccion.value == "todo"){
            limpiarSeleccion();
            crearCards(PRODUCTOS);
        }else {
            limpiarSeleccion();
            crearFiltrados(filtroSeleccion.value);
            crearCards(PRODUCTOS_FILTRADOS)
        }
        localStorage.setItem('filtro', filtroSeleccion.value)
}

function filtroPredeter() {
        limpiarSeleccion();
        crearFiltrados(filtroGuardado);
        crearCards(PRODUCTOS_FILTRADOS)
    }

function crearFiltrados(val){
    PRODUCTOS_FILTRADOS = PRODUCTOS.filter(produ => produ.clase == val);
}
function crearCards(arr){
    for (let i=0; i < arr.length; i++) {
        let nuevaFoto = document.createElement('img');
        nuevaFoto.setAttribute('src', arr[i].link);
        fotosProductos.appendChild(nuevaFoto);
        nuevaFoto.addEventListener('click', () => 
        productoSeleccionado.setAttribute('src' , arr[i].link))
        nuevaFoto.addEventListener('click', actualizarNombre)
    }
}
function limpiarSeleccion(){   
    fotosProductos.innerHTML = "";
    nombreProducto.textContent = "";
    productoSeleccionado.setAttribute('src', "")
}

///muestra el total de 
//productos pedidos en el carrito

function sumarCantidad(arr) {
    cantidadCompra.textContent = arr.reduce( (ac, pedido) => ac + parseInt(pedido.cantidad), 0);
}

//envía img seleccionada al
//carrito
function llenarCarrito(arr){
    let imagenCompra = document.createElement('img')
    arr.forEach(pedido => imagenCompra.setAttribute('src', pedido.link))
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
        CARRITO.push(new Pedido(`${cliente}`, `${direccion}`, `${nombreProducto.textContent}`, `${cantidad}`, `${talle}`,  `${observaciones}`, 
        productoSeleccionado.getAttribute('src')));
        sumarCantidad(CARRITO);
    }else{
            alert('Aún no has seleccionado ningún producto')
        } ;
    llenarCarrito(CARRITO);
    localStorage.setItem('carrito', JSON.stringify(CARRITO));
    localStorage.setItem('carrito-img', divFotos.getInnerHTML())
}
//carga el carrito
//desde el localStorage
let pedidoGuardado = localStorage.getItem('carrito');
let PEDIDO_GUARDADO;
let pedidoGuardadoFotos = localStorage.getItem('carrito-img')

function persistirCarrito(){
    if(pedidoGuardado !== null){
        PEDIDO_GUARDADO = JSON.parse(pedidoGuardado);
        divFotos.innerHTML = pedidoGuardadoFotos;
        cantidadCompra.textContent = PEDIDO_GUARDADO.reduce( (ac, pedido) => ac + parseInt(pedido.cantidad), 0);
    }
}


///enviar datos
datosClientes.addEventListener('submit', enviarAlCarrito);

//botones del modal
botonModal.onclick =() => {
    carritoModal.style.display = "block";
  }
botonCerrarModal.onclick = () => {
    carritoModal.style.display = "none";
}

btnEliminar.onclick = () =>{
    divFotos.removeChild(divFotos.lastChild)
    CARRITO.pop()
    if(pedidoGuardado !== null){
    PEDIDO_GUARDADO.pop()
    localStorage.setItem('carrito-img', divFotos.innerHTML)
    localStorage.setItem('carrito', JSON.stringify(PEDIDO_GUARDADO));
    sumarCantidad(PEDIDO_GUARDADO)
    }else{
        sumarCantidad(CARRITO);
    }
    
}

filtroSeleccion.addEventListener('change', filtrar)


//window.onload = filtroPredeter();

window.onload = persistirCarrito();
