//Clase del objeto del carrito
class Pedido {
    constructor(cliente, direccion, producto, cantidad, talle, email, link, precio){
        this.cliente = cliente,
        this.direccion = direccion,
        this.producto = producto,
        this.cantidad = cantidad,
        this.talle = talle,
        this.email = email
        this.link = link;
        this.precio = precio
    }
    enviarPedido(){  
        fetch('https://eoa76zm4bv2ytl2.m.pipedream.net',{
            method: 'POST',
            body: JSON.stringify(CARRITO)
        }).then(
            console.log('pedido enviado')
        )
    }
}

//Display de productos y selección
const nombreProducto = document.querySelector('#producto-seleccion-nombre');
const productoSeleccionado = document.querySelector('#producto-seleccion');
const fotosProductos = document.querySelector('.tienda-fotos');
const filtroSeleccion = document.querySelector("#filtro");
const tiendaControl = document.querySelector('#tienda-control');
let fondoTienda = document.querySelector("#fondo-tienda");

//carrito
let botonCart = document.querySelector("#btn-cart")
let datosClientes = document.querySelector("#forma-cliente")
let CARRITO = [];

///Storage de Carrito
let pedidoGuardado = localStorage.getItem('carrito');
let pedidoGuardadoFotos = localStorage.getItem('carrito-img')

///Modal del carrito

let botonModal = document.querySelector('#boton-modal')
let carritoModal = document.querySelector('#carrito-modal')
let botonCerrarModal = document.querySelector("#cerrar-modal")
let cantidadCompra = document.querySelector("#cantidad-comprada");
let divFotos = document.querySelector("#carrito-flex");
let btnEliminar = document.querySelector('#eli-prod');
let btnComprar = document.querySelector('#btn-comprar')



//Productos disponibles
fetch('http://myjson.dit.upm.es/api/bins/411z')
.then(response => response.json())
.then(data => PRODUCTOS = data);

let PRODUCTOS = [];

//El modelo del producto seleccionado
function actualizarNombre() {
    objetoElegido = PRODUCTOS.find(prod => prod.link == productoSeleccionado.getAttribute('src'))
    nombreProducto.textContent = objetoElegido.modelo;
    nombreProducto.scrollIntoView();
    if (nombreProducto !== ""){
        tiendaControl.style.display = "grid"
    }
}

//Crea las cards
//de los productos repasando
//el array

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
        fotosProductos.scrollIntoView();
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

function sumarCantidad() {
    cantidadCompra.textContent = CARRITO.reduce( (ac, pedido) => ac + parseInt(pedido.cantidad), 0);
}

//envía img seleccionada al
//carrito
function llenarCarrito(){
    let imagenCompra = document.createElement('img')
    CARRITO.forEach(pedido => imagenCompra.setAttribute('src', pedido.link))
    divFotos.appendChild(imagenCompra);
    localStorage.setItem('carrito-img', divFotos.getInnerHTML())
}

//envia los datos del form
//al carrit

function enviarAlCarrito() {
    let talle = document.querySelector("#talle").value;
    let cantidad = document.querySelector("#canti").value;
    let email = document.querySelector("#obs").value;
    let cliente = document.querySelector("#cliente").value;
    let direccion = document.querySelector("#direccion").value;
    //precio del producto
    let precio = PRODUCTOS.find(produ => produ.modelo == nombreProducto.textContent).precio
    ///evita que se envíe un pedido
    ///sin producto
    if(nombreProducto.innerText !== "" && cantidad > 0){
        CARRITO.push(new Pedido(`${cliente}`, `${direccion}`, `${nombreProducto.textContent}`, `${cantidad}`, `${talle}`,  `${email}`, 
        `${productoSeleccionado.getAttribute('src')}`, `${precio}`));
        sumarCantidad(CARRITO);
        localStorage.setItem('carrito', JSON.stringify(CARRITO));
    }else{
            swal('Algo no salió como esperabámos, revisá tus datos')
        } ;
    llenarCarrito();
}

//carga el carrito
//desde el localStorage

function persistirCarrito(){
    if(pedidoGuardado !== null){
        CARRITO = JSON.parse(pedidoGuardado);
        divFotos.innerHTML = pedidoGuardadoFotos;
        sumarCantidad();
   }
}
function recordarCarrito(){
   if(pedidoGuardado){Toastify({
    text: "¡Tenés productos en el carrito!",
    duration: 2000,
    gravity: "top", 
    position: "left", 
    avatar: "https://cdn-icons-png.flaticon.com/512/4555/4555971.png",
    style: {
      background: "#ffd600",

    },
    onClick: function(){carritoModal.style.display = "block";} 
  }).showToast();}
}
function reiniciarCarrito(){
    CARRITO = [];
    localStorage.removeItem('carrito');
    localStorage.removeItem('carrito-img');
    divFotos.innerHTML = "";
    sumarCantidad()
}

function notificar(){
    swal(`${CARRITO[0].cliente}, ¡gracias por elegirnos! Recibirás tu compra en ${CARRITO[0].direccion} dentro de una semana, te enviamos todos los detalles de tu compra a ${CARRITO[0].email}`
    ) .then(
     carritoModal.style.display = "none"
     )
}

///enviar datos

datosClientes.addEventListener('submit', enviarAlCarrito);

//botones del modal

botonModal.onclick =() => {
    carritoModal.style.display = "block";
}
botonCart.onclick =() => {
    carritoModal.style.display = "block";
}
botonCerrarModal.onclick = () => {
    carritoModal.style.display = "none";
}
btnEliminar.onclick = () =>{
    divFotos.removeChild(divFotos.lastChild)
    CARRITO.pop();
    sumarCantidad(CARRITO);
    localStorage.setItem('carrito-img', divFotos.innerHTML)
    localStorage.setItem('carrito', JSON.stringify(CARRITO));
    cantidadCompra.textContent === "0" && localStorage.removeItem('carrito');
}
btnComprar.onclick = () =>{
    let precioTotal = 0;
    CARRITO.forEach(function(pd){
         precioTotal += (pd.precio * parseInt(pd.cantidad));
        })
    swal({
        text: `El precio total de tu compra es $${precioTotal}, ¿querés continuar?`,
        buttons: ['Cancelar', 'OK']
      }).then((conf) => {
        conf && notificar();
        CARRITO[0].enviarPedido();
        reiniciarCarrito();
        });
}

filtroSeleccion.addEventListener('change', filtrar)

window.onload = persistirCarrito(), recordarCarrito();


