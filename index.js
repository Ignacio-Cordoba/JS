
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





function imprimirimc() {
  console.log(array[0].imc);
}

const arraycarrito = []

function ObtenerCarrito() {
  const carrito = localStorage.getItem('carrito')
  return JSON.parse(carrito) || []
}

function GuardarCarrito(nuevoCarrito) {
  const carrito = JSON.stringify(nuevoCarrito)
  localStorage.setItem('carrito', carrito)
}


function AñadirPlanes(plan) {
  const carrito = ObtenerCarrito()
  carrito.push(plan)
  GuardarCarrito(carrito)
}


let plan1 = {
  nombre: "Musculacion",
  precio: "7000$",
  duracion: "1 mes"
}
let plan2 = {
  nombre: "Calistenia",
  precio: "5000$",
  duracion: "1 mes"
}



const carrito = ObtenerCarrito()


function BotonMusculacion() {
  AñadirPlanes(plan1)

}

function BotonCalistenia() {
  AñadirPlanes(plan2)
}


const print_usuario = document.getElementById('print_usuario')
const print_imc = document.getElementById('print_imc')
const boton = document.getElementById('boton');
boton.addEventListener('click', () => {

  const li = document.createElement("li");
  li.innerHTML = array[0].nombre + "<br>" + array[0].altura + "<br>" + array[0].peso + "<br>";
  print_usuario.append(li);

});


const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', () => {

  const li = document.createElement("li");
  li.innerHTML = array[0].imc;
  print_imc.append(li);

});

const boton3 = document.getElementById('boton3')
boton3.addEventListener('click', () => {
  BotonMusculacion();
  Swal.fire({
    icon: 'success',
    title: 'Hecho!',
    text: 'Se cargo su plan de Musculacion',

  });
});

const boton4 = document.getElementById('boton4')
boton4.addEventListener('click', () => {
  BotonCalistenia();
  Swal.fire({
    icon: 'success',
    title: 'Hecho!',
    text: 'Se cargo su plan de calistenia',

  });
});


const botonCrearUsuario = document.getElementById("crearUsuario");
botonCrearUsuario.addEventListener("click", function () {
  const newUsuario = crearusuario();
  array.push(newUsuario);
});



const link = "https://jsonplaceholder.typicode.com/users";
const lista = document.getElementById("lista");



const botonProfesionales = document.getElementById('lista_profesionales')
botonProfesionales.addEventListener('click', ListaProfesionales)

function ListaProfesionales() {
  fetch(link)
    .then(response => response.json())
    .then(data => {
      data.sort(usuario => {
        const li = document.createElement("li");
        li.innerHTML = usuario.name + "<br>Telefono: " + usuario.phone;
        lista.append(li);
      });
    })
}


boton_mostrar_carrito= document.getElementById('boton_print_carrito')
boton_mostrar_carrito.addEventListener('click',() => {
  carrito.forEach(carrito=> {
    const li = document.createElement("li");
        li.innerHTML = carrito.nombre + "<br>" + carrito.precio + "<br>" + carrito.duracion;
        print_carrito.append(li);
  });
})
