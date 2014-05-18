var temporizador = 0
var abrir
function desplegar_menu(objeto, event){

    document.getElementById('menu').style.cursor = 'pointer'

    clearTimeout(temporizador)
    if(abrir){
          abrir.style.height = '0px'	
          abrir.style.visibility = 'hidden'
    }
    abrir = objeto.id
	alert(abrir)
    abrir.style.height = '800px'	
}

function ocultar_menu(){
    temporizador = setTimeout(ocultalo, 1000)
    function ocultalo(){
            document.getElementById('menu').style.cursor = 'auto'
            abrir.style.transitionDuration='1s'
            abrir.style.height = '0'
            abrir.style.visibility = 'hidden'
	}
}

