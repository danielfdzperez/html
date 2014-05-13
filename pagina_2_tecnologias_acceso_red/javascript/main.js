window.onresize = redimensionar_logo;
function redimensionar_logo(){
   var ancho = window.innerWidth;
   //var alto = window.innerHeight;
   var alto = document.getElementById("logo").offsetHeight
   var medida = ancho + "px" + " " + alto + "px"
      // alert(medida)
      // alert(document.getElementById("menu").offsetHeight)
   document.getElementById("logo").style.backgroundSize = medida;
   document.getElementById("logo").style.height = medida;
}



