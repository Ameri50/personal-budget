// Array para almacenar los estudiantes
const estudiantes = [];

// Función para agregar estudiante desde la UI
function agregarEstudianteUI() {
  const nombre = document.getElementById("nombre").value;
  const calificacionesStr = document.getElementById("calificaciones").value;

  // Convertir calificaciones a un array de números
  const calificaciones = calificacionesStr.split(",").map(Number);

  // Validar y agregar estudiante
  agregarEstudiante(nombre, calificaciones);

  // Limpiar campos de entrada
  document.getElementById("nombre").value = "";
  document.getElementById("calificaciones").value = "";

  // Actualizar la lista de estudiantes en la UI
  mostrarEstudiantes();
}

// Función para agregar estudiante con validaciones
function agregarEstudiante(nombre, calificaciones) {
  if (typeof nombre !== "string" || nombre.trim() === "") {
    alert("Nombre inválido.");
    return;
  }
  if (!Array.isArray(calificaciones) || !calificaciones.every(c => typeof c === "number" && c >= 0 && c <= 100)) {
    alert("Las calificaciones deben ser números entre 0 y 100.");
    return;
  }

  const nuevoEstudiante = {
    id: estudiantes.length + 1,
    nombre,
    calificaciones,
    asistencia: true,
    estado: "activo"
  };

  estudiantes.push(nuevoEstudiante);
  guardarDatos(); // Guardar en localStorage
}

// Función para calcular el promedio de un estudiante
function calcularPromedio(calificaciones) {
  const suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
  return suma / calificaciones.length;
}

// Función para mostrar la lista de estudiantes en la página
function mostrarEstudiantes() {
  const listaEstudiantes = document.getElementById("listaEstudiantes");
  listaEstudiantes.innerHTML = "";

  estudiantes.forEach(estudiante => {
    const promedio = calcularPromedio(estudiante.calificaciones);
    const clasificacion = clasificarEstudiante(promedio);

    const estudianteDiv = document.createElement("div");
    estudianteDiv.classList.add("estudiante");

    estudianteDiv.innerHTML = `
      <p><strong>ID:</strong> ${estudiante.id}</p>
      <p><strong>Nombre:</strong> ${estudiante.nombre}</p>
      <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
      <p><strong>Clasificación:</strong> ${clasificacion}</p>
    `;

    listaEstudiantes.appendChild(estudianteDiv);
  });
}

// Función para clasificar a los estudiantes según su promedio
function clasificarEstudiante(promedio) {
  if (promedio >= 90) {
    return "Excelente";
  } else if (promedio >= 80) {
    return "Bueno";
  } else if (promedio >= 70) {
    return "Regular";
  } else {
    return "Necesita Mejorar";
  }
}

// Función para guardar datos en localStorage
function guardarDatos() {
  localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

// Función para cargar datos de localStorage
function cargarDatos() {
  const datosGuardados = localStorage.getItem("estudiantes");
  if (datosGuardados) {
    estudiantes.push(...JSON.parse(datosGuardados));
  }
}

// Cargar los datos al inicio
cargarDatos();
