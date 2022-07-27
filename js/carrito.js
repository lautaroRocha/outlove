import { fadeInFast} from './modules/fade.js'

import { filtroSeleccion, tiendaControl, botonCart, datosClientes, botonModal, carritoModal, botonCerrarModal, cantidadCompra, divFotos, btnEliminar, btnComprar, botonLoQuiero, enviarAlCarrito, añadido, persistirCarrito, leerProductos, recordarCarrito, filtrar, CARRITO, sumarCantidad, notificar, enviarPedido, reiniciarCarrito } from "./modules/var_carrito.js"


///ONLOAD
window.onload = persistirCarrito(), leerProductos();
window.onload = setTimeout(recordarCarrito, 1000)



datosClientes.addEventListener('submit', enviarAlCarrito, añadido)
filtroSeleccion.onchange =() =>{
    filtrar();
}


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
        if(conf){ 
        notificar();
        enviarPedido();
        reiniciarCarrito();
        }else {
            console.log('pedido cancelado')
            reiniciarCarrito();
        }
        }) 
        
        
}
botonLoQuiero.onclick = () =>{
    tiendaControl.style.display !== "grid" && fadeInFast(tiendaControl)
    tiendaControl.style.display = "grid" 
}
