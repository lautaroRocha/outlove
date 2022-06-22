//CARRUSEL DE BANNER 
{
    let imagenCarrusel = document.querySelector("#imagen-carrusel")
    const imagenesCarru = ["test-uno.png", "test-dos.png", "test-tres.png"];
    let botonCarrusel = document.querySelector("#boton-carrusel");
    let posicion = 0
    let textoCarru = document.querySelector("#copy-carru")
    const copyCarru = ["Una aventura te espera", "Todo lo mejor para tus viajes", "A donde la tierra te lleve"]
    
    botonCarrusel.addEventListener('click', pasarFoto);
    
    function pasarFoto(){
        if (posicion >= imagenesCarru.length-1){
            posicion = 0;
        }else {
            posicion ++
        }
        cambiarFoto();
        cambiarCopy();
        }
        function cambiarFoto(){
            imagenCarrusel.setAttribute('src' , `images/${imagenesCarru[posicion]}` )
        }
        function cambiarCopy() {
            textoCarru.textContent = copyCarru[posicion];
        }
    }