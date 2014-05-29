function comprobar_navegador(){

//if(!(navigator.userAgent.indexOf("Chrome") != -1 || navigator.userAgent.indexOf("Firefox") != -1))
    var mensaje = "Esta página ha sido diseñada para Firefox y Chrome. \n No se conoce el comportamiento de esta web con" + 
	      " otro navegador.\n Para un correcto funcionamiento use Firefox o Chrome.\n Gracias."
    if(navigator.userAgent.indexOf("MSIE") != -1)
        window.alert(mensaje)
    
    if(navigator.userAgent.match(/Opera|OPR\//) || navigator.userAgent.indexOf("Safari") != -1)
        alert(mensaje)
}
/*window.onresize = redimensionar_logo;
function redimensionar_logo(){
   var ancho = window.innerWidth;
   //var alto = window.innerHeight;
   var alto = document.getElementById("logo").offsetHeight
   var medida = ancho + "px" + " " + alto + "px"
      // alert(medida)
      // alert(document.getElementById("menu").offsetHeight)
   document.getElementById("logo").style.backgroundSize = medida;
   //document.getElementById("logo").style.height = medida;
}*/

var BUBBLING_PHASE = 2
function cargar_pagina(url, id, event){
   var evento = event || window.event
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


