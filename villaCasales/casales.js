var vc = document.getElementById("villaCasales");
var lienzo = vc.getContext("2d");

var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};
var fondo = {
  url: "tile.png",
  cargaOK: false
};

//##########################Dibujo del esenario##############################

fondo.objeto = cargarImagen(fondo, cargarFondo);
vaca.objeto = cargarImagen(vaca, cargarVaca);
pollo.object = cargarImagen(pollo, cargarPollo);
cerdo.object = cargarImagen(cerdo, cargarCerdo);

function aleatorio(min, max){
  var resultado;
  resultado = Math.floor(Math.random()*(max - min + 1)) + min;
  return resultado;
}

function dibujar(){
  if (fondo.cargaOK){
    lienzo.drawImage(fondo.objeto, 0, 0);
    for(v=0;v<5;v++){
      var x = aleatorio(2, 7);
      var y = aleatorio(2, 7);

      if (vaca.cargaOK) {
        var xv = x * 60;
        var yv = y * 60;
        lienzo.drawImage(vaca.objeto, xv, yv);
      }
      if (pollo.cargaOK) {
        var xp = x * 10;
        var yp = y * 10;
        lienzo.drawImage(pollo.objeto, xp, yp);
      }
      if (cerdo.cargaOK) {
        var xc = x * 35;
        var yc = y * 35;
        lienzo.drawImage(cerdo.objeto, xc, yc);
      }
    }

  }
}

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}
function cargarVaca(){
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollo(){
  pollo.cargaOK = true;
  dibujar();
}
function cargarCerdo(){
  cerdo.cargaOK = true;
  dibujar();
}

function cargarImagen(imagen, funcion){
  imagen.objeto = new Image();
  imagen.objeto.src = imagen.url;
  imagen.objeto.addEventListener("load", funcion);
  return imagen.objeto;
}
