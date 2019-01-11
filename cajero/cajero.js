var caja = [];
caja.push(new billetes(50, 3));
caja.push(new billetes(20, 2));
caja.push(new billetes(10, 2));

var entregado =[];
var dinero = 170;

document.write("<h3>Dinero entregado</h3>")

for(var billete of caja){
  if(dinero > 0){
    var div = Math.floor(dinero/billete.valor);
    var papeles = 0;

    if(div > billete.cantidad){
      papeles = billete.cantidad;
      billete.cantidad = 0;
    }else{
      papeles = div;
      billete.cantidad = billete.cantidad - div;
    }

    entregado.push(new billetes(billete.valor, papeles));
    dinero = dinero - (billete.valor*papeles);

  }
}

if (dinero <=0) {
  for(var billete of entregado){
    document.write(billete.cantidad + " Billetes de " + billete.valor + "<br/>")
  }
} else{
  document.write("No puedo entregar esta cantidad de dinero");
}
