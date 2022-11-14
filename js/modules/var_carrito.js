import { fadeInSlow } from './fade.js'


//Clase del objeto del carrito
export class Pedido {
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

}

//Display de productos y selección
export const productoSeleccionado = document.querySelector('#producto-seleccion');
export const fotosProductos = document.querySelector('.tienda-fotos');
export const filtroSeleccion = document.querySelector("#filtro");
export const tiendaControl = document.querySelector('#tienda-control');
export let fondoTienda = document.querySelector("#fondo-tienda");
export const cardSeleccion = document.querySelector('.tienda-seleccion');
export const cardSeleccionExtra = document.querySelector('.extra');


//carrito
export let botonLoQuiero = document.querySelector('#btn-loquiero')
export let botonCart = document.querySelector("#btn-cart")
export let datosClientes = document.querySelector("#forma-cliente")

///Storage de Carrito
export let pedidoGuardado = localStorage.getItem('carrito');
export let pedidoGuardadoFotos = localStorage.getItem('carrito-img')

///Modal del carrito

export let botonModal = document.querySelector('#boton-modal')
export let carritoModal = document.querySelector('#carrito-modal')
export let botonCerrarModal = document.querySelector("#cerrar-modal")
export let cantidadCompra = document.querySelector("#cantidad-comprada");
export let divFotos = document.querySelector("#carrito-flex");
export let btnEliminar = document.querySelector('#eli-prod');
export let btnComprar = document.querySelector('#btn-comprar')

//variables que no pueden ser importadas en m
export let PRODUCTOS = [];
export let PRODUCTOS_FILTRADOS; 
export let objetoElegido;
export let CARRITO = [];
export let talle = document.querySelector("#talle");
export const nombreProducto = document.querySelector('#producto-seleccion-nombre');
export const precioProducto = document.querySelector('#producto-seleccion-precio')

//Productos disponibles
export function leerProductos() {
    fetch('https://api.npoint.io/131787e421a0d882a264')
    .then(response => response.json()
    .then(data => PRODUCTOS = data))
    .catch((err) => console.log('hubo un error: ' + err))
}

//El modelo del producto seleccionado
export function actualizarNombre() {
    objetoElegido = PRODUCTOS.find(prod => prod.link == productoSeleccionado.getAttribute('src'))
    cardSeleccion.style.display = "flex"
    cardSeleccionExtra.style.display = "flex"
    nombreProducto.textContent = objetoElegido.modelo;
    precioProducto.textContent = '$' + objetoElegido.precio;
    fadeInSlow(nombreProducto);
    fadeInSlow(productoSeleccionado)
    fadeInSlow(cardSeleccionExtra)
    talleCalzado();
    nombreProducto.scrollIntoView({block: "center"});
}

export function talleCalzado(){
    if (objetoElegido.clase == "calzado"){
    talle.innerHTML = '<option value="38">38</option><option value="M">39</option><option value="L">40</option><option value="XL">41</option><option value="XXL">42</option>'
    }
    else {
        talle.innerHTML = '<option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XLL</option>'
    }
}

//Crea las cards
//de los productos repasando
//el array
export function filtrar(){
        if (filtroSeleccion.value == "todo"){
            limpiarSeleccion();
            crearCards(PRODUCTOS);
        }else {
            limpiarSeleccion();
            crearFiltrados(filtroSeleccion.value);
            crearCards(PRODUCTOS_FILTRADOS)
        }
        fadeInSlow(fotosProductos)
        fotosProductos.scrollIntoView({block: "center"});
}
export function crearFiltrados(val){
    PRODUCTOS_FILTRADOS = PRODUCTOS.filter(produ => produ.clase == val);
}
export function crearCards(arr){
    for (let i=0; i < arr.length; i++) {
        let nuevaFoto = document.createElement('img');
        nuevaFoto.setAttribute('src', arr[i].link);
        fotosProductos.appendChild(nuevaFoto);
        nuevaFoto.addEventListener('click', () => 
            productoSeleccionado.setAttribute('src' , arr[i].link))
            nuevaFoto.addEventListener('click', actualizarNombre)
        }
}
export function limpiarSeleccion(){   
    cardSeleccion.style.display = "none"
    cardSeleccionExtra.style.display = "none"
    tiendaControl.style.display = "none";
    fondoTienda.style.display = "none";
    fotosProductos.innerHTML = "";
    nombreProducto.textContent = "";
    productoSeleccionado.setAttribute('src', "")
}

///muestra el total de 
//productos pedidos en el carrito
export function sumarCantidad() {
    cantidadCompra.textContent = CARRITO.reduce( (ac, pedido) => ac + parseInt(pedido.cantidad), 0);
}

//envía img seleccionada al
//carrito
export function llenarCarrito(){
    let imagenCompra = document.createElement('img')
    CARRITO.forEach(pedido => imagenCompra.setAttribute('src', pedido.link))
    divFotos.appendChild(imagenCompra);
    localStorage.setItem('carrito-img', divFotos.getInnerHTML())
}

//envia los datos del form
//al carrito
export function enviarAlCarrito() {
    let cantidad = document.querySelector("#canti").value;
    let email = document.querySelector("#obs").value;
    let cliente = document.querySelector("#cliente").value;
    let direccion = document.querySelector("#direccion").value;
    let precio = PRODUCTOS.find(produ => produ.modelo == nombreProducto.textContent).precio
    ///evita que se envíe un pedido
    ///sin producto
    if(nombreProducto.innerText !== "" && cantidad > 0){
        CARRITO.push(new Pedido(`${cliente}`, `${direccion}`, `${nombreProducto.textContent}`, `${cantidad}`, `${talle.value}`,  `${email}`, 
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
export function persistirCarrito(){
    if(pedidoGuardado !== null){
        CARRITO = JSON.parse(pedidoGuardado);
        divFotos.innerHTML = pedidoGuardadoFotos;
        sumarCantidad();
   }
}
export function recordarCarrito(){
    if(pedidoGuardado){Toastify({
    text: "¡Tenés productos en el carrito!",
    duration: 2000,
    gravity: "top", 
    position: "left", 
    avatar: "https://cdn-icons-png.flaticon.com/512/4555/4555971.png",
    onClick: function(){carritoModal.style.display = "block";} 
  }).showToast();}
}
export function reiniciarCarrito(){
    CARRITO = [];
    localStorage.removeItem('carrito');
    localStorage.removeItem('carrito-img');
    divFotos.innerHTML = "";
    sumarCantidad()
}
export function notificar(){
    swal(`${CARRITO[0].cliente}, ¡gracias por elegirnos! Recibirás tu compra en ${CARRITO[0].direccion} dentro de una semana, te enviamos todos los detalles de tu compra a ${CARRITO[0].email}`
    ) .then(
     carritoModal.style.display = "none"
     )
}
export function añadido() {
    Toastify({
    text: "¡Envíamos tu selección al carrito!",
    duration: 1000,
    gravity: "top", 
    position: "left", 
    avatar: "https://cdn-icons-png.flaticon.com/512/4555/4555971.png",
    onClick: function(){carritoModal.style.display = "block";} 
  }).showToast();
}
export function enviarPedido(){  
    fetch('https://eowyibfgz8ma6uc.m.pipedream.net',{
        method: 'POST',
        body: JSON.stringify(CARRITO)
    }).then(console.log('pedido enviado'))
}
