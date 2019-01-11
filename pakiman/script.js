var coleccion =[];
coleccion.push(new Pakiman("Cauchin", "Hierva", 100, 30));
coleccion.push(new Pakiman("Pokacho", "Electrico", 80, 50));
coleccion.push(new Pakiman("Tocinauro", "Fuego", 120, 40));

for(var poke of coleccion){
  poke.mostrar();
}
