//CLASE PARA CREAR PRODUCTOS
//Y EL PEDIDO DEL CLIENTE
class Pedido {
    constructor (tipo, cantidad, color, precio, direccion){
    this.tipo = tipo,
    this.cantidad = cantidad;
    this.color = color,
    this.precio = precio;
    this.direccion = direccion;
    }
    mostrar(){
        alert(`Recibirás tu orden de ${this.cantidad} ${this.tipo}/s ${this.color}/s en ${this.direccion} en los próximos 3 días hábiles, el valor total es de ${this.precio}`)
    }
}
class Producto {
    constructor (tipo, color, precio){
        this.tipo = tipo,
        this.color = color,
        this.precio = precio;
    }
}

//LOS PRODUCTOS DISPONIBLES SON CREADOS
//Y AÑADIDOS AL ARRAY

let productosDisponibles = [];
let carrito = [];

productosDisponibles.push(new Producto ("remera", "negro", 1500))
productosDisponibles.push(new Producto("remera", "blanco", 1500))
productosDisponibles.push(new Producto("remera", "naranja", 1500));
productosDisponibles.push(new Producto ("gorra", "negro", 700));
productosDisponibles.push(new Producto("gorra", "rojo", 700))
productosDisponibles.push( new Producto("gorra", "azul", 700));

//FILTRO QUE SELECCIONA
//EL TIPO DE PRODUCTO

let remeras = [];
let gorras = [];

function filtrarRemeras(){
     remeras = productosDisponibles.filter( (pro) => {
    return pro.tipo === "remera"
})}

function filtrarGorras(){
    gorras = productosDisponibles.filter( (pro) => {
   return pro.tipo === "gorra"
})}

///REVISA LOS COLORES DE CADA ARTICULO
//Y CREA UN STRING QUE LOS CONTIENE
let coloresDisponibles = [];

let colores = "";

function mostrarColoresRemeras() {
    if (colores === ""){         ///evita que en la segunda compra se repitan los colores
    remeras.forEach(reme =>{
        return coloresDisponibles.push(reme.color);
    })
    let ulti = coloresDisponibles.pop();
    colores  = coloresDisponibles.join(', ') + ' y ' + ulti;
    return colores;
    }else {
        return colores               
    }
}
function mostrarColoresGorras() {
    if (colores === ""){
    gorras.forEach(gorra =>{
        return coloresDisponibles.push(gorra.color);
    })
    let ulti = coloresDisponibles.pop();
    colores  = coloresDisponibles.join(', ') + ' y ' + ulti;
    return colores;
    }else {
        return colores
    }
}

//ASIGNA VALORES DEL COLOR Y CANTIDAD
//ELEGIDOS POR EL USUARIO

let colorElegido;
let cantidad;

function colorYCantidad() {
    colorElegido = prompt (`los colores disponibles son ${colores}, ¿cuál quieres llevar?`);
    cantidad = prompt('¿Cuántas quieres?');
}

//SIMULADOR DE COMPRA(LLAMADO DE FUNCIONES)
function simularCompra(){
    carrito = []; //en caso de volver al inicio, se resetea el carrito para que su método funcione correctamente
    alert('Bienvenido a outlove. Tenemos indumentaria pensada para vos.')
    let eleccion = prompt('¿Quieres ver remeras o gorras?')
    if(eleccion === "remeras"){
        eleccion = "remera"
        filtrarRemeras();
        mostrarColoresRemeras();
        colorYCantidad();
    }else if (eleccion ==="gorras") {
        eleccion = "gorra"
        filtrarGorras();
        mostrarColoresGorras();
        colorYCantidad();
    }else {
        conti = confirm('Algo salio mal, ¿quieres seguir comprando?')
        if (conti){
            simularCompra();
        }else {
            return
        }
    }
    alert(`estás comprando ${cantidad} ${eleccion}/s de color ${colorElegido}, puedes añadir más productos al finalizar esta compra`)
    dire = prompt('¿A dónde deberíamos enviartelo?')
    if(eleccion === "gorra"){
        precio = gorras[0].precio * cantidad
        }else{
        precio = remeras[0].precio * cantidad
    }
    carrito.push(new Pedido(eleccion, cantidad, colorElegido, precio, dire))
    carrito[0].mostrar();
    let continuar = confirm('Quieres seguir comprando?')
    if(continuar){
        simularCompra();
    }else {
        alert('¡Gracias por tu compra!')
    }
}



