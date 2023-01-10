
  const indumentaria = [
    {
      id: 1,
      nombre: "Pantalon",
      cantidad:1,
      precio: 8500,
    },
    {
      id: 2,
      nombre: "Campera",
      cantidad:1,
      precio: 15000,
    },
    {
      id: 3,
      nombre: "Remera",
      cantidad:1,
      precio: 3500,
    },
    {
      id: 4,
      nombre: "Zapatillas",
      cantidad:1,
      precio: 22000,
    },
    {
      id: 5,
      nombre: "Mochila",
      cantidad:1,
      precio: 11000,
    },
  ];
  
  
  let carrito= []
  
  const contenedor = document.querySelector("#contenedor");
  indumentaria.forEach((prod) => {
    const {id, nombre, precio, cantidad} = prod
    contenedor.innerHTML +=` <div>
    <h5>${nombre}</h5>
    <p>${precio}</p>
    <p>${cantidad}</p>
    <button onclick="agregarProducto(${id})">agregar al carrito</button>
    </div>
    `
    
    
  });

  function agregarProducto(id){
    const item = indumentaria.find((prod)=>prod.id === id);
    carrito.push(item)
    console.log(item)
  }

  /*alert("Bienvenido a ANL indumentaria deportiva")*/
  
  
  /*let seleccion = prompt("¿Usted quiere comprar algo? escriba si o no")*/
  
  
  /*while (seleccion !="si" && seleccion !="no") {
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
    while (seleccion =="si") {
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
      seleccion = prompt("¿Quiere agregar otra indumentaria a su carrito?");
      carrito.push({indumentaria, unidades, precio})
  
  
      
    }
    alert("Muchas gracias por habernos elejido")
    console.log(carrito);*/
  

  