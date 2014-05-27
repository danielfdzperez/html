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
    if(evento.eventPhase != BUBBLING_PHASE)
	return
    var elemento = document.getElementById(id).src=url
}
function renderizar_iframe(obj){
     obj.height = obj.contentWindow.document.body.scrollHeight + 100 + "px"
}

var menu_activo = null
function mantener_activo(elemento, evento){
    if(evento.eventPhase == 2)
	return

    if(menu_activo)
	desactivar(elemento)

    if(arguments[1] == 'start')
	menu_activo = document.getElementById(elemento)
    else
       menu_activo = elemento
    
       menu_activo.className = "MenuActivo"
}
function desactivar(){
       menu_activo.className = "MenuPrincipal"
}
