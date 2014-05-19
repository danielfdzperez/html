window.onresize = redimensionar_logo;
function redimensionar_logo(){
   var ancho = window.innerWidth;
   //var alto = window.innerHeight;
   var alto = document.getElementById("logo").offsetHeight
   var medida = ancho + "px" + " " + alto + "px"
      // alert(medida)
      // alert(document.getElementById("menu").offsetHeight)
   document.getElementById("logo").style.backgroundSize = medida;
   //document.getElementById("logo").style.height = medida;
}

const BUBBLING_PHASE = 2
function cargar_pagina(url, id, evento){
    var xhr = false
    if(evento.eventPhase != BUBBLING_PHASE)
	return
    if (window.XMLHttpRequest)// Para IE7+, Firefox, Chrome, Opera, Safari
	xhr=new XMLHttpRequest()

    else// Para IE6, IE5
	xhr=new ActiveXObject("Microsoft.XMLHTTP")

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) 
            document.getElementById(id).innerHTML = xhr.responseText
    }
    xhr.open('GET', url, true)
    xhr.send()
}

var menu_activo = null
function mantener_activo(elemento){
    if(menu_activo)
	desactivar(elemento)

    if(arguments.length > 1)
	menu_activo = document.getElementById(elemento)
    else
       menu_activo = elemento
    
       menu_activo.className = "MenuActivo"
}
    function desactivar(){
       menu_activo.className = "MenuPrincipal"
    }
