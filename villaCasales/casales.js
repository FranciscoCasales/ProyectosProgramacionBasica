document.addEventListener("keyup", moverViejito);

var vc = document.getElementById("villaCasales");
var lienzo = vc.getContext("2d");

var cViejito = document.getElementById("viejito");
var lienzoViejito = cViejito.getContext("2d");

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
var viejito = {
  url: "spritesViejito.png",
  cargaOK: false,
  posx: 250,
  posy: 250,
  posFrmx: 0,
  posFrmy: 0,
  frames: 4,
  currentFrame: 0,
  width: 64,
  height: 96,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  isUp: false,    isDown: false,    isLeft: false,    isRight: false,
  frameUp: 3,   frameDown: 0,    frameLeft: 1,  frameRight: 2
};

//##########################Dibujo del esenario##############################

fondo.objeto = cargarImagen(fondo, cargarFondo);
vaca.objeto = cargarImagen(vaca, cargarVaca);
pollo.object = cargarImagen(pollo, cargarPollo);
cerdo.object = cargarImagen(cerdo, cargarCerdo);

//#########################Se agrega el personaje############################

viejito.objeto = cargarImagen(viejito, cargarViejito);


function moverViejito(evento){
  var x_nueva = viejito.posx;
  var y_nueva = viejito.posy;

  lienzoViejito.clearRect(viejito.posx, viejito.posy,
    viejito.width, viejito.height);

  viejito.currentFrame = ++viejito.currentFrame % viejito.frames;
  viejito.posFrmx = viejito.currentFrame * viejito.width;

  switch(evento.keyCode){
    case viejito.UP:
      y_nueva = viejito.posy - 1;
      viejito.isUp = true;
      viejito.posFrmy = viejito.frameUp * viejito.height;
    break;
    case viejito.DOWN:
      y_nueva = viejito.posy + 1;
      viejito.isDown = true;
      viejito.posFrmy = viejito.frameDown * viejito.height;
    break;
    case viejito.RIGHT:
      x_nueva = viejito.posx + 1;
      viejito.isRight = true;
      viejito.posFrmy = viejito.frameRight * viejito.height;
    break;
    case viejito.LEFT:
      x_nueva = viejito.posx - 1;
      viejito.isLeft = true;
      viejito.posFrmy = viejito.frameLeft * viejito.height;
    break;
  }

  dibujar();

  viejito.isUp = false;
  viejito.isDown = false;
  viejito.isRight = false;
  viejito.isLeft = false;
  viejito.posx = x;
  viejito.posy = y;
}

//#######################################################################

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

    if(viejito.cargaOK){
      lienzoViejito.drawImage(viejito.objeto, viejito.posFrmx,viejito.posFrmy,
        viejito.width, viejito.height, viejito.posx, viejito.posy,
        viejito.width,viejito.height);
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
function cargarViejito(){
  viejito.cargaOK = true;
  dibujar();
}

function cargarImagen(imagen, funcion){
  imagen.objeto = new Image();
  imagen.objeto.src = imagen.url;
  imagen.objeto.addEventListener("load", funcion);
  return imagen.objeto;
}
