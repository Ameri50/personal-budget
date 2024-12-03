// Arreglo para almacenar estudiantes
let estudiantes = [];

// Función para agregar estudiantes
function agregarEstudiante() {
  const nombre = document.getElementById('nombre').value;
  const calificacionesInput = document.getElementById('calificaciones').value;

  // Validaciones básicas
  if (!nombre || !calificacionesInput) {
    alert('Por favor, ingresa el nombre y las calificaciones.');
    return;
  }

  const calificaciones = calificacionesInput.split(',').map(Number);
  
  if (calificaciones.some(isNaN)) {
    alert('Por favor, ingresa números válidos para las calificaciones.');
    return;
  }

  const promedio = calcularPromedio(calificaciones);

  const nuevoEstudiante = {
    nombre: nombre,
    calificaciones: calificaciones,
    asistencia: true,
    estado: promedio >= 70 ? 'Aprobado' : 'Reprobado'
  };

  estudiantes.push(nuevoEstudiante);
  actualizarTabla();
  actualizarRangos();
}

// Función para calcular promedio
function calcularPromedio(calificaciones) {
  const total = calificaciones.reduce((acc, curr) => acc + curr, 0);
  return (total / calificaciones.length).toFixed(2);
}

// Actualizar la tabla de estudiantes
function actualizarTabla() {
  const tabla = document.getElementById('tablaEstudiantes').getElementsByTagName('tbody')[0];
  tabla.innerHTML = ''; // Limpiar tabla

  estudiantes.forEach(estudiante => {
    const fila = tabla.insertRow();
    const promedio = calcularPromedio(estudiante.calificaciones);
    fila.innerHTML = `
      <td>${estudiante.nombre}</td>
      <td>${promedio}</td>
      <td>${estudiante.asistencia ? 'Presente' : 'Ausente'}</td>
      <td>${estudiante.estado}</td>
    `;
  });
}

// Función para buscar estudiantes
function buscarEstudiantes() {
  const termino = document.getElementById('buscar').value.toLowerCase();
  const resultados = estudiantes.filter(estudiante => estudiante.nombre.toLowerCase().includes(termino));
  
  const tabla = document.getElementById('tablaEstudiantes').getElementsByTagName('tbody')[0];
  tabla.innerHTML = ''; // Limpiar tabla

  resultados.forEach(estudiante => {
    const fila = tabla.insertRow();
    const promedio = calcularPromedio(estudiante.calificaciones);
    fila.innerHTML = `
      <td>${estudiante.nombre}</td>
      <td>${promedio}</td>
      <td>${estudiante.asistencia ? 'Presente' : 'Ausente'}</td>
      <td>${estudiante.estado}</td>
    `;
  });
}

// Función para ordenar por promedio
function ordenarPorPromedio() {
  estudiantes.sort((a, b) => calcularPromedio(b.calificaciones) - calcularPromedio(a.calificaciones));
  actualizarTabla();
}

// Actualizar rangos de estudiantes
function actualizarRangos() {
  const rangosDiv = document.getElementById('rangos');
  rangosDiv.innerHTML = ''; // Limpiar

  const aprobados = estudiantes.filter(e => e.estado === 'Aprobado').length;
  const reprobados = estudiantes.filter(e => e.estado === 'Reprobado').length;

  rangosDiv.innerHTML = `
    <p>Total de estudiantes: ${estudiantes.length}</p>
    <p>Estudiantes aprobados: ${aprobados}</p>
    <p>Estudiantes reprobados: ${reprobados}</p>
  `;
}
