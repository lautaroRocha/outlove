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
productosDisponibles.push(new Producto("remera", "blanco", 1800))
productosDisponibles.push(new Producto("remera", "naranja", 1200));
productosDisponibles.push(new Producto ("gorra", "negro", 200));
productosDisponibles.push(new Producto("gorra", "rojo", 700))
productosDisponibles.push( new Producto("gorra", "azul", 500));

//FILTRO QUE SELECCIONA
//EL TIPO DE PRODUCTO

let REMERAS = [];
let GORRAS = [];

function filtrarRemeras(){
     REMERAS = productosDisponibles.filter( (pro) => {
    return pro.tipo === "remera"
})}

function filtrarGorras(){
    GORRAS = productosDisponibles.filter( (pro) => {
   return pro.tipo === "gorra"
})}

///REVISA LOS COLORES DE CADA ARTICULO
//Y CREA UN STRING QUE LOS CONTIENE

let COLORES_DISPONIBLES;

let colores = "";

let ulti;

function mostrarColores(arr) {
    COLORES_DISPONIBLES = [];
    ulti = "";
    arr.forEach(reme =>{
        return COLORES_DISPONIBLES.push(reme.color)
        })
    ulti = COLORES_DISPONIBLES.pop();
    colores  = COLORES_DISPONIBLES.join(', ') + ' y ' + ulti;
    return colores;
   
}


//ASIGNA VALORES DEL COLOR Y CANTIDAD
//ELEGIDOS POR EL USUARIO
let colorElegido;
let cantidad;
let precio;
let colorDisponible; 

function pedirColor() {
    colorElegido = prompt (`los colores disponibles son ${colores}, ¿cuál quieres llevar?`);
    COLORES_DISPONIBLES.push(ulti);
    colorDisponible = COLORES_DISPONIBLES.includes(colorElegido);
    while(colorDisponible === false){
        alert('El color elegido no está disponble, prueba de nuevo')
        color();
    }
}

function pedirCantidad(){
    cantidad = prompt('¿Cuántas quieres?');
}

//MUESTRA EL OBJETO EN EL CARRITO


//OFRECE VOLVER A COMPRAR
function finCompra(){
    let continuar = confirm('Quieres seguir comprando?')
    if(continuar){
        simularCompra();
    }else {
        alert('¡Gracias por tu compra!')
    }
}

//SIMULADOR DE COMPRA(LLAMADO DE FUNCIONES)
function simularCompra(){
    alert('Bienvenido a outlove. Tenemos indumentaria pensada para vos.')
    let eleccion = prompt('¿Quieres ver remeras o gorras?').toLowerCase;
    if(eleccion === "remeras"){
        eleccion = "remera"
        filtrarRemeras();
        mostrarColores(REMERAS);
        pedirColor();
        pedirCantidad()
    }else if (eleccion ==="gorras") {
        eleccion = "gorra"
        filtrarGorras();
        mostrarColores(GORRAS);
        pedirColor();
        pedirCantidad();
    }else {
        conti = confirm('Algo salio mal, ¿quieres seguir comprando?')
        if (conti){
            simularCompra();
        }else {
            return
        }
    }
    alert(`Seleccionaste ${cantidad} ${eleccion}/s de color ${colorElegido}`)
    dire = prompt('¿A dónde deberíamos enviartelo?')
    if(eleccion === "gorra"){
        objetoElegido = GORRAS.find((gorra) => gorra.color == colorElegido)
        precio = objetoElegido.precio;
        }else{
        objetoElegido =  REMERAS.find((reme) => reme.color == colorElegido)
        precio = objetoElegido.precio
    }
    carrito.push(new Pedido(eleccion, cantidad, colorElegido, precio, dire))
    carrito[0].mostrar();
    finCompra();
}



