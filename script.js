//DISPLAY DE PRODUCTOS Y SELECCIÓN
const productos = ["images/remera1.jpg", "images/remera2.jpg", "images/remera3.jpg", "images/remera4.jpg", "images/remera5.jpg", "images/remera6.jpg" ];

const productoSeleccionado = document.getElementById('producto-seleccion');
const fotosProductos = document.querySelector('.tienda-fotos');
    
for (let i=0; i<productos.length; i++) {
    let nuevaFoto = document.createElement('img');
    nuevaFoto.setAttribute('src', productos[i]);
    fotosProductos.appendChild(nuevaFoto);
    nuevaFoto.addEventListener('click', () => 
    productoSeleccionado.setAttribute('src' , productos[i]))
};


//VARIACION EN EL TITULO INTERACTUANDO CON LAS FOTOS

const titulo = document.getElementById('titu');
const fotosInicio = document.querySelector('.inicio-fotos');

fotosInicio.addEventListener('click', () =>{
    if (titulo.textContent ==='Alaska, el gatito que todos aman amar.') {
        return titulo.textContent = "¡Atrevéte! Alaska aguarda ansiosamente amarte"
    }else if(titulo.textContent === "¡Atrevéte! Alaska aguarda ansiosamente amarte"){
        return titulo.textContent = "COMPRA COMPRA COMPRA COMPRA" 
    } else {
        return titulo.textContent = 'Alaska, el gatito que todos aman amar.';
    }
})





