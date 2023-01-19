
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
  const carritoContador = document.querySelector("#carritoContenedor")
  const vaciarCarrito = document.querySelector ("#vaciarCarrito")
  const precioTotal = document.querySelector("#precioTotal")
  const procesarCompra = document.querySelector("#procesarCompra")



  indumentaria.forEach((prod) => {
    const {id, nombre, precio, cantidad} = prod
    contenedor.innerHTML +=` <div>
    <h5>${nombre}</h5>
    <p>${precio}</p>
    <p>${cantidad}</p>
    <button onclick="agregarProducto(${id})">Comprar</button>
    </div>
    `
     
  });

  procesarCompra.addEventListener ("click",()=>{
    if(carrito.length===0){
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo si quieres continuar",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        title: "¡Compra finalizada con exito!",
        text: "Muchas gracias por habernos elegido",
        icon: "success",
        confirmButtonText: "Aceptar",
})
    }
  });


  vaciarCarrito.addEventListener("click",()=>{
    carrito.length = []
    verCarrito()

  })

  function agregarProducto(id){

    const igual = carrito.some (prod => prod.id=== id)
    if(igual){
      const prod = carrito.map (prod =>{
        if(prod.id=== id){
          prod.cantidad++
        }
      })
    } else {
    const item = indumentaria.find((prod)=>prod.id === id);
    carrito.push(item)}
    verCarrito()
  }

const verCarrito= () => {
  const modalBody = document.querySelector (".modal .modal-body")

  modalBody.innerHTML=""

  carrito.forEach((prod)=>{
    const {id, nombre, precio, cantidad}= prod
    modalBody.innerHTML +=`
    <div class="modal-contenedor">
      <div>
      <p>Producto: ${nombre}</p>
    <p>Precio: ${precio}</p>
    <p>Cantidad :${cantidad}</p>
    <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
      </div>
    </div>
    

    `;
  })

  carritoContador.textContent = carrito.length

  precioTotal.innerText = carrito.reduce ((acc,prod)=> acc + prod.cantidad * prod.precio, 0)

  guardarStorage()

}

function eliminarProducto(id){
  const induId = id
  carrito = carrito.filter((indu)=> indu.id !== induId)
  verCarrito()
}

function guardarStorage(){
  localStorage.setItem("guardar", JSON.stringify(carrito))
}