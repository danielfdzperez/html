var numero_imagen = 0
var imagen = null
var imagenes = ["images/antena_3g.jpg", "images/antena_wifi.jpg", "images/fibra.jpg" ]
var intervalo = null

function iniciar_imagenes(){
    intervalo = setInterval("imagen_siguiente()", 5000)
}

function resto(numero, resto) {
    return ((numero % resto) + resto) % resto
}
function imagen_anterior(){
    imagen = imagen || document.getElementById('imagen_principal')
    numero_imagen--
    imagen.src = imagenes[resto(numero_imagen, 3)]
    //alert("numero" + numero_imagen + "resto" + [resto(numero_imagen, 3)])
}
function imagen_siguiente(){
    imagen = imagen || document.getElementById('imagen_principal')
    numero_imagen++
    imagen.src = imagenes[resto(numero_imagen, 3)]
    //alert("numero" + numero_imagen + "resto" + [resto(numero_imagen, 3)])
}
function cambio_imagenes(objeto){
   if(cambio_imagenes.cambio){
       clearInterval(intervalo)
        cambio_imagenes.cambio = false
	objeto.innerHTML = '>'
   }
   else{
        intervalo = setInterval("imagen_siguiente()", 5000)
	objeto.innerHTML = '='
        cambio_imagenes.cambio = true
   }
      
}
cambio_imagenes.cambio = true
