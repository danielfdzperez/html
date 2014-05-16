var temporizador = 0
var abrir
function desplegar_menu(id){

    document.getElementById('menu').style.cursor = 'pointer'

    clearTimeout(temporizador)
    if(abrir){
          abrir.style.transitionDuration='1s'
          abrir.style.height = '0px'	
    }
    abrir = document.getElementById(id)
    /*abrir.style.visibility = 'visible'*/
    abrir.style.transitionDuration='5s'
    abrir.style.height = '100%'	
    
}

function ocultar_menu(){
    temporizador = setTimeout(ocultalo, 1000)
    function ocultalo(){
            document.getElementById('menu').style.cursor = 'auto'
            abrir.style.transitionDuration='1s'
            abrir.style.height = '0'
	}
}
