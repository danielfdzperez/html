var temporizador = 0
var abrir
function desplegar_menu(id){
    clearTimeout(temporizador)
    if(abrir)
        abrir.style.visibility = 'hidden'	
    abrir = document.getElementById(id)
    abrir.style.visibility = 'visible'	
}

function ocultar_menu(){
    temporizador = setTimeout(ocultalo, 2000)
    function ocultalo(){
            abrir.style.visibility = 'hidden'
	}
}
