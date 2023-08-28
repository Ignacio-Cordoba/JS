
// const altura = document.getElementById('altura')
// const peso = document.getElementById('peso')
// const informacion = document.getElementById('informacion');

// informacion.addEventListener('click', () => {
  
//   const altura2 = altura.value;
//   const peso2 = peso.value
  
//   alert(altura2);
// })


// function saludo() {
//   alert("Bienvenido a la calculadora de IMC");

//   const confirmar = confirm("Empezar");
//   if (confirmar) {
//     calcularimc();
//   } else {
//     return;
//   }
// }

const array = [];
let newUsuario;

function crearusuario() {
  const usuario = {};
  usuario.nombre = document.getElementById("nombre").value;
  usuario.altura = document.getElementById("altura").value;
  usuario.peso = document.getElementById("peso").value;
  usuario.imc = calcularimc(usuario.peso, usuario.altura);
  return usuario;
}

function calcularimc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
}



function imprimirarray() {
  console.log(array);
}

function imprimirimc() {
  console.log(array[0].imc);
}

const arraycarrito= []

function ObtenerCarrito() {
  const carrito = localStorage.getItem('carrito')
  return JSON.parse(carrito) || []
}

function GuardarCarrito(nuevoCarrito) {
      const carrito = JSON.stringify(nuevoCarrito)
      localStorage.setItem('carrito', carrito)
}


function AñadirPlanes(plan) {
  const carrito= ObtenerCarrito()
  carrito.push(plan)
  GuardarCarrito(carrito)
}


let plan1={
  nombre: "Musculacion",
  precio: 7000,
  duracion: "1 mes"
}
let plan2={
  nombre: "Calistenia",
  precio: 5000,
  duracion: "1 mes"
}



const carrito= ObtenerCarrito()


function BotonMusculacion() {
  AñadirPlanes(plan1)
  
}

function BotonCalistenia() {
  AñadirPlanes(plan2)
}


