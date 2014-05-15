var temporizador = 0
var abrir
function desplegar_menu(id){

    document.getElementById('menu').style.cursor = 'pointer'

    clearTimeout(temporizador)
    if(abrir)
        abrir.style.visibility = 'hidden'	
    abrir = document.getElementById(id)
    abrir.style.visibility = 'visible'	
}

function ocultar_menu(){
    temporizador = setTimeout(ocultalo, 2000)
    function ocultalo(){
            document.getElementById('menu').style.cursor = 'auto'
            abrir.style.visibility = 'hidden'
	}
}
