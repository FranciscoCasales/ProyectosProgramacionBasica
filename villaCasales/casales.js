var vc = document.getElementById("villaCasales");
var lienzo = vc.getContext("2d");
var mapa = "tile.png";

var imagen = new Image();
imagen.src = mapa;
imagen.addEventListener("load", dibujarImagen);

function aleatorio(min, max){
  var resultado;
  resultado = Math.floor(Math.random()*(max - min + 1)) + min;
  return resultado;
}

function dibujarImagen(){
  lienzo.drawImage(imagen, 0, 0);
}
