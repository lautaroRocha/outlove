import { fadeIn } from './modules/fade.js'

import {Pedido, nombreProducto, productoSeleccionado, fotosProductos, filtroSeleccion, tiendaControl, fondoTienda, botonCart, datosClientes, pedidoGuardado, pedidoGuardadoFotos, botonModal, carritoModal, botonCerrarModal, cantidadCompra, divFotos, btnEliminar, btnComprar} from "./modules/var_carrito.js"

//variables que no pueden ser importadas en m
let PRODUCTOS = [];
let PRODUCTOS_FILTRADOS; 
let objetoElegido;
let CARRITO = [];


//Productos disponibles
function leerProductos() {
    fetch('http://myjson.dit.upm.es/api/bins/411z')
    .then(response => response.json())
    .then(data => PRODUCTOS = data);
}

//El modelo del producto seleccionado
function actualizarNombre() {
    objetoElegido = PRODUCTOS.find(prod => prod.link == productoSeleccionado.getAttribute('src'))
    nombreProducto.textContent = objetoElegido.modelo;
    fadeIn(nombreProducto);
    fadeIn(productoSeleccionado)
    nombreProducto.scrollIntoView({block:"center"});
    if (nombreProducto !== ""){
        tiendaControl.style.display = "grid"
    }
    talleCalzado();
}

function talleCalzado(){
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
        fadeIn(fotosProductos)
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

//env??a img seleccionada al
//carrito
function llenarCarrito(){
    let imagenCompra = document.createElement('img')
    CARRITO.forEach(pedido => imagenCompra.setAttribute('src', pedido.link))
    divFotos.appendChild(imagenCompra);
    localStorage.setItem('carrito-img', divFotos.getInnerHTML())
}

//envia los datos del form
//al carrit

let talle = document.querySelector("#talle");
let cantidad = document.querySelector("#canti").value;
let email = document.querySelector("#obs").value;
let cliente = document.querySelector("#cliente").value;
let direccion = document.querySelector("#direccion").value;


function enviarAlCarrito() {
    //precio del producto
    let precio = PRODUCTOS.find(produ => produ.modelo == nombreProducto.textContent).precio
    ///evita que se env??e un pedido
    ///sin producto
    if(nombreProducto.innerText !== "" && cantidad > 0){
        CARRITO.push(new Pedido(`${cliente}`, `${direccion}`, `${nombreProducto.textContent}`, `${cantidad}`, `${talle.value}`,  `${email}`, 
        `${productoSeleccionado.getAttribute('src')}`, `${precio}`));
        sumarCantidad(CARRITO);
        localStorage.setItem('carrito', JSON.stringify(CARRITO));
    }else{
            swal('Algo no sali?? como esperab??mos, revis?? tus datos')
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
    text: "??Ten??s productos en el carrito!",
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
    swal(`${CARRITO[0].cliente}, ??gracias por elegirnos! Recibir??s tu compra en ${CARRITO[0].direccion} dentro de una semana, te enviamos todos los detalles de tu compra a ${CARRITO[0].email}`
    ) .then(
     carritoModal.style.display = "none"
     )
}

///enviar datos

datosClientes.addEventListener('submit', enviarAlCarrito);


function enviarPedido(){  
    fetch('https://eoa76zm4bv2ytl2.m.pipedream.net',{
        method: 'POST',
        body: JSON.stringify(CARRITO)
    }).then(
        console.log('pedido enviado')
    )
}
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
        text: `El precio total de tu compra es $${precioTotal}, ??quer??s continuar?`,
        buttons: ['Cancelar', 'OK']
      }).then((conf) => {
        conf && notificar();
        enviarPedido();
        reiniciarCarrito();
        });
}

filtroSeleccion.addEventListener('change', filtrar);

window.onload = persistirCarrito(), recordarCarrito(), leerProductos();