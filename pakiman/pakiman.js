var imagenes = [];
imagenes ["Cauchin"] = "vaca.png";
imagenes ["Pokacho"] = "pollo.png";
imagenes ["Tocinauro"] = "cerdo.png";

class Pakiman {
  constructor(nombre, tipo, vida, ataque) {
    this.imagen = new Image();
    this.nombre = nombre;
    this.tipo = tipo;
    this.vida = vida;
    this.ataque = ataque;
    this.imagen.src = imagenes[this.nombre];
  }

  mostrar(){
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong><br />");
    document.write("Vida:   " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<br /></p><hr />");
  }
}
