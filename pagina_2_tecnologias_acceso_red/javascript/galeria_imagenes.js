var numero_imagen = 0
var imagen = null
var imagenes = [
               "antena_3g.jpg", 
               "antena_wifi.jpg", 
               "fibra.jpg", 
               "antena_satelite.jpg", 
               "antena_tlfmovil.jpg", 
               "conector_ethernet.jpg", 
               "modem_cablemodem.jpg", 
               "modem_rdsi.jpg", 
               "modem_satelite.jpg", 
               "nic_ethernet.jpg", 
               "repetidor_3G.jpg", 
               "router_ethernet.jpg", 
               "wifi_router.jpg", 
               "wimax_equipment.jpg"
               ]
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
    imagen.src = "../images/" + imagenes[resto(numero_imagen, imagenes.length)]
    //alert("numero" + numero_imagen + "resto" + [resto(numero_imagen, 3)])
}
function imagen_siguiente(){
    imagen = imagen || document.getElementById('imagen_principal')
    numero_imagen++
    imagen.src = "../images/" + imagenes[resto(numero_imagen, imagenes.length)]
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
