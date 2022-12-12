const indumentaria = [
  {nombre:"Pantalon", precio: 8500},
  {nombre:"Campera", precio: 15000},
  {nombre:"Remera", precio: 3500},
  {nombre:"Zapatillas", precio: 22000},
  {nombre:"Mochila", precio: 11000},
];

let carrito= []

alert("Bienvenido a ANL indumentaria deportiva")

let seleccion = prompt("¿Usted quiere comprar algo? escriba si o no")

while (seleccion !="si" && seleccion !="no") {
  alert("Por favor ingrese una respuesta valida")
  seleccion = prompt ("¿Usted quiere comprar algo? escriba si o no")
  }
  
  if (seleccion =="si") {
    let stockIndumentaria = indumentaria.map((indumentaria)=> indumentaria.nombre + " " + "$"+ indumentaria.precio);
    alert(stockIndumentaria.join ("//"))
  }
  else if (seleccion =="no") {
    alert("Muchas gracias por habernos visitado")
  }
  while (seleccion ="si") {
    let indumentaria = prompt ("Agrega a tu carrito la indumentaria que quieras")
    
    if (indumentaria == "Pantalon" || indumentaria == "Campera" ||indumentaria == "Remera" ||indumentaria == "Zapatillas" ||indumentaria == "Mochila" ){
      switch (indumentaria) {
        case "Pantalon":
          precio = 8500;
          break;
          case "Campera":
          precio = 15000;
          break;
          case "Remera":
          precio = 3500;
          break;
          case "Zapatillas":
          precio = 22000;
          break;
          case "Mochila":
          precio = 11000;
          break;
          default:
          break;
      }
    }
    let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))
    seleccion = prompt ("¿Quiere agregar otra indumentaria a su carrito?")
    while (seleccion =="no") {
      alert("Muchas gracias por habernos elejido")
      carrito.push({indumentaria, unidades, precio})
      console.log(carrito);
    }
  
  }




  


