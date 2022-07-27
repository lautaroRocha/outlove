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

