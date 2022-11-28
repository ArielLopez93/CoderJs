alert("Bienvenido. Ingrese el accesorio que desea comprar")
let ElijaAccesorio = Number(prompt("1-Zapatilla $21000 2-Buzo $8000 3-Remera $3500 4-Campera $15000"))

while (ElijaAccesorio !="CANCELAR") {
  switch (ElijaAccesorio) {
    case 1:
      ElijaAccesorio = Number(alert("Usted ha agregado unas Zapatillas al carrito"))
      
      break;

    case 2:
      ElijaAccesorio = Number(alert("Usted ha agregado un Buzo al carrito"))
        break;

    case 3:
      ElijaAccesorio = Number(alert("Usted ha agregado una Remera al carrito"))
          break;

     case 4:
      ElijaAccesorio = Number(alert("Usted ha agregado una Campera al carrito"))
       break;
  
    default:
      break;
  }
  
}
