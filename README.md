# // Outlove 🍃

🧑‍🎓 Proyecto final curso de Javascript en Codehourse  
🎁 SPA con carrito de compras 
 

<b> LIVE DEMO : https://lautarorocha.github.io/outlove </b>

## 💡Sobre el proyecto

Para incorporar todos los conocimientos vistos en el curso desarrollé una SAP para una marca ficticia. Además de programar todas sus funcionalidades con JavaScript, diseñé y desarrollé la app de manera totalmente responsiva con SASS. Las funcionalidades del proyecto son 3, y están divididas en los tres scripts dentro de la carpeta /js. 


### ⭐ darkmode.js

Este script maneja la funcionalidad que cambia entre dos modos de interfaz, el predeterminado y el modo oscuro. El algoritmo se encarga de guardar un valor en el almacenamiento  local del navegador, que se actualiza cada vez que el cliente cambia de modo; y consultar ese valor mientras cargue la app, por lo que la app siempre se inicia en el modo preferido del usuario.
    

![comparación-modo.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c9547158-a7ab-4cf5-8fe3-c4d5ee7ad0da/comparacin-modo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220727T185735Z&X-Amz-Expires=86400&X-Amz-Signature=9b8fd98a1888c3e82d60d5a08f62396b5d25f393b90bd7e0c7af93d3880e3e99&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22comparaci%25C3%25B3n-modo.png%22&x-id=GetObject)

### 🎠carrusel.js

Este fue el primer script que programé para el proyecto, y también es seguramente el más sencillo. Armé un carrusel de 3 slides, que corresponden a 3 rutas de imágenes guardadas como strings en un array. Apretando el botón de siguiente, se ejecuta una función que asocia una variable llamada posición a un índice del array, y con ese dato trae además una imagen, una frase de otro array diferente. 
     Si bien es un componente fácilmente incorporable desde muchas librerías, disfruté mucho de desarrollarlo por mí mismo como primer componente.

![Screenshot_4.png](https://github.com/lautaroRocha/outlove/blob/master/screenshots/Screenshot_4.png?raw=true)


### 🛒carrito.js

La funcionalidad principal de la app es simular el proceso de compra de productos de la marca. Este archivo es el responsable de ejecutar las funciones que reciben la mayoría del input del usuario. De los tres archivos principales es por diferencia el más extenso, por eso fue el  primero en hacer notar lo importante que es tener el código ordenado. Después de probar distintas estructuras, organicé toda la lógica y declaración de variables en un módulo que se importa, y dentro del archivo carrito.js solo le asignan las funciones a eventos del DOM.
     Como los productos enviados a carrito son almacenados como JSON en la memoria local del navegador, al cargarse la página una función de este script revisa eso para notificar al usuario en caso de haber dejado un pedido sin comprar (para esto usé la librería Toastify.js para disparar una alerta personalizada con el estilo del resto de la app). Seguidamente realiza una petición GET a una URL donde tengo alojado un JSON con todos los productos disponibles, los cuales convierte en objetos de JS y los asigna como valor del array vacío PRODUCTOS.

![Screenshot_4.png](https://github.com/lautaroRocha/outlove/blob/master/screenshots/Screenshot_5.png?raw=true)

 

Con los productos ya cargados, el usuario puede filtrar entre ellos según el tipo de indumentaria, o elegir verlos todos. Esto generará HTML de manera dinámica con los objetos correspondientes, y al elegir alguno de los productos aparecerá su valor, si el usuario lo vuelve a seleccionar aparecerá un elemento del tipo forma para que ingrese los datos necesarios para realizar el envío de su compra. Estos datos son verificados gracias a atributos de HTML5, requiriendo mínimo JavaScript. Además tiene contenido acorde al tipo de producto, si se elije un calzado, los talles serán acordes.

![Screenshot_6.png](https://github.com/lautaroRocha/outlove/blob/master/screenshots/Screenshot_6.png?raw=true)

Si el usuario confirma que quiere comprar los productos del carrito, se dispara un nuevo modal mostrando el valor total de la compra y pidiendo la última confirmación. Este modal es disparado mediante la librería sweetAlert, y si el usuario vuelve a confirmar (si se cumple la promesa), dispara una función que envía los objetos almacenados en el array CARRITO como JSON a una API

![Screenshot_11.png](https://github.com/lautaroRocha/outlove/blob/master/screenshots/Screenshot_11.png?raw=true)

![Screenshot_12.png](https://github.com/lautaroRocha/outlove/blob/master/screenshots/Screenshot_12.png?raw=true)
 

El servicio que provee la API a la que se postea el pedido es brindado por el sitio Pipedream, y puede ser revisado públicamente entrando a [https://pipedream.com/workflows](https://pipedream.com/workflows) ,  logueándose con el username outloveindumentaria y la contraseña outlovepedidos.

 /////////////////////////////////////////////////////////////<br>
 Lautaro Rocha<br>
 https://www.linkedin.com/in/lautaro-rocha/
