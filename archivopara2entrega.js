/* PROYECTO: Registrar los articulos disponibles y seleccionarlos por color para conocer el precio, y registrar el monto total por las ventas realizadas menos el monto por devoluciones para obtener la venta final.
 */

//AQUI EMPIEZA EL PROYECTO
// Se crean objetos con una clase:
class Vestido {
 constructor(color, talla, precio) {
  this.color = color;
  this.talla = talla;
  this.precio = precio;
 }
}
// se registran los artículos disponibles en la tienda
const vestidos = [];
vestidos.push(new Vestido("rojo", "M", 1500));
vestidos.push(new Vestido("azul", "L", 2300));
vestidos.push(new Vestido("amarillo", "S", 890));
vestidos.push(new Vestido("lila", "S", 1200));
vestidos.push(new Vestido("blanco", "M", 2500));
vestidos.push(new Vestido("rosa", "L", 1600));

console.log(vestidos);

let disponibles = "Vestidos disponibles:\n";
for (const vestido of vestidos) {
 disponibles += `Color: ${vestido.color},  Talla: ${vestido.talla}\n`;
}

let entrada = '';
let continuar = true;
let vestidosCarrito = [];
while (!!continuar) {
  alert(disponibles)
  entrada = prompt("Ingrese el color del vestido que quiere añadir.");
  let vestido = vestidos.find((vestido)=>{
    return entrada === vestido.color
  });
  if(!!vestido){
    alert( `El precio del vestido es $${vestido.precio}`);
    vestidosCarrito.push(vestido);
  } else {
    alert("No hay en existencia.");
  }
  continuar = confirm('¿Desea agregar un vestido más?')
}
// se registra un descuento
function calculadora(totalVentas, descuento, operacion) {
 switch (operacion) {
  case "+":
   return totalVentas + descuento;
   break;
  case "-":
   return totalVentas - devolucion;
   break;
  case "*":
   return totalVentas * devolucion;
   break;
  case "/":
   return totalVentas / devolucion;
   break;
  default:
   return "No hay devoluciones";
   break;
 }
}

let totalVentas = vestidosCarrito.map((v)=> v.precio).reduce((a, b)=> a + b, 0);
alert('El precio total es de ' + totalVentas);

let devolucion = parseInt(prompt("Ingrese el descuento"));
let operacion = prompt("Ingrese la operacion");
let resultado = calculadora(totalVentas, devolucion, operacion);
alert(`Venta final ${totalVentas} ${operacion} ${devolucion} = ${resultado}`);
