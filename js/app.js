// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarcarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners()
// Registrar los eventos
function cargarEventListeners() {
  // Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener('click', agregarCurso);
};

// Funciones
function agregarCurso(e) {
  e.preventDefault(); //Se utiliza para controlar el comportamiento del evento.

  if(e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  };
};

//Leer contenido del HTML y extraer información.
function leerDatosCurso(curso) {
  console.log(curso);

  //Creamos un Objeto con el contenido del curso actual o selecionado
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  }

  //Revisamos si un elemento ya existe en el carrito
  const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if (existe) {
      //Actualizamos la cantidad
      const cursos = articulosCarrito.map( curso => {
        if (curso.id === infoCurso.id) {
          curso.cantidad++;
          return curso; //Retona el objeto actualizado.
        } else {
          return curso; //Retorna los objetos que no son duplicados
        }
      });
      articulosCarrito = [...cursos];
    } else {
    //--Agrega elementos al carrito de compras--//
      //Utilizamos el spread operator para traer una copia el arreglo.
      articulosCarrito = [...articulosCarrito, infoCurso];
    } 

  console.log(articulosCarrito);

  carritoHtml();
}

//Mostramos los datos del carrito de compras en el HTML <tr></tr>
  //Creamos la funcion.
  function carritoHtml() {
    
    //Eliminar-Limpiar HTML
    limpiarHTML();
    
    //Recorremos el arreglo para ir iterando y asi agregar la información
    articulosCarrito.forEach( curso => {

      //Utilizamos destructuring  para crear la variable y extraer su valor
      const { imagen, titulo, precio, cantidad, } = curso;

      const row = document.createElement('tr');
        row.innerHTML = `
          <td>
            <img src="${imagen}" width="100"
          </td>
          <td>${titulo}</td>
          <td>${precio}</td>
          <td>${cantidad}</td>
        `;

    // Agrega el HTML al carrito <tbody></tbody>
      contenedorCarrito.appendChild(row);
    })
  }

  //Elimina los cursos Agregados al <tbody></tbody> para limpiar el Html y evitar los duplicados.
function limpiarHTML() {
    //--Forma lenta de limpiar el html--//
      //contenedorCarrito.innerHTML = '';

//--Forma mas rapida y de mejor performance de limpiar el HTML--//
  //Validamos que se cumpla la condición y que si contiene al menos un elemento (.firstChild) se ejecute este codigo hasta limpiar el HTML, si queda limpia se deja de ejecutar.
  while(contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }
}
