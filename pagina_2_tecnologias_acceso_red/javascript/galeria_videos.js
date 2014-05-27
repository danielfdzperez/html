var numero_video = 0
var video = null
var videos = [
             "//www.youtube.com/embed/mZUOKF6TYHo",
             "//www.youtube.com/embed/gHRAMhIQVVg",
	     "//www.youtube.com/embed/w4qrWqd--MA",
             "//www.youtube.com/embed/0qmaXdudMxg"
             ]
var temporizador = null

function resto(numero, resto) {
    return ((numero % resto) + resto) % resto
}
function video_anterior(){
    video = video || document.getElementById('pantalla_video')
    numero_video--
    video.src = "https:" + videos[resto(numero_video, videos.length)]
    //alert("numero" + numero_video + "resto" + [resto(numero_video, 3)])
}
function video_siguiente(){
    video = video || document.getElementById('pantalla_video')
    numero_video++
    video.src = "https:" + videos[resto(numero_video, videos.length)]
    //alert("numero" + numero_video + "resto" + [resto(numero_video, 3)])
}
function cambio_videos(objeto){
   if(!objeto){
        temporizador = setInterval("video_siguiente()", 10000)
	return
   }
   if(cambio_videos.cambio){
       clearInterval(temporizador)
        cambio_videos.cambio = false
	objeto.innerHTML = '>'
   }
   else{
        temporizador = setInterval("video_siguiente()", 10000)
	objeto.innerHTML = '='
        cambio_videos.cambio = true
   }
      
}
cambio_videos.cambio = true
