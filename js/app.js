// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarcarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners()
// Registrar los eventos
function cargarEventListeners() {
  // Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener('click', agregarCurso);
}

// Funciones
function agregarCurso(e) {
  e.preventDefault(); //Se utiliza para controlar el comportamiento del evento.

  if(e.target.classList.contains('agregar-carrito')) {
    console.log('Presionando en cursos');
  }
}