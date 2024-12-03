const estudiantes = [
    {
      id: 1,
      nombre: "Juan",
      calificaciones: [85, 90, 78],
      asistencia: true,
      estado: "activo"
    }
  ];
  
  // Mostrar estudiantes en la tabla
  function mostrarEstudiantes() {
    const tabla = document.querySelector("#tablaEstudiantes tbody");
    tabla.innerHTML = ""; // Limpiar tabla antes de agregar nuevos datos
  
    estudiantes.forEach(estudiante => {
      const promedio = calcularPromedio(estudiante.calificaciones);
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${estudiante.nombre}</td>
        <td>${promedio}</td>
        <td>${estudiante.asistencia ? "Asistió" : "Faltó"}</td>
        <td>${estudiante.estado}</td>
      `;
      tabla.appendChild(row);
    });
  }
  
  // Calcular promedio
  function calcularPromedio(calificaciones) {
    return calificaciones.reduce((sum, calificacion) => sum + calificacion, 0) / calificaciones.length;
  }
  
  // Agregar estudiante
  function agregarEstudiante() {
    const nombre = document.querySelector("#nombre").value;
    const calificaciones = document.querySelector("#calificaciones").value.split(",").map(Number);
  
    if (!nombre || calificaciones.some(c => c < 0 || c > 100)) {
      alert("Datos inválidos.");
      return;
    }
  
    const nuevoEstudiante = {
      id: estudiantes.length + 1,
      nombre,
      calificaciones,
      asistencia: true,
      estado: calcularPromedio(calificaciones) >= 70 ? "activo" : "inactivo"
    };
  
    estudiantes.push(nuevoEstudiante);
    mostrarEstudiantes();
    guardarDatos();
  }
  
  // Filtrar estudiantes por nombre
  function buscarEstudiantes() {
    const busqueda = document.querySelector("#buscar").value.toLowerCase();
    const estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.nombre.toLowerCase().includes(busqueda));
    mostrarEstudiantes(estudiantesFiltrados);
  }
  
  // Ordenar por promedio
  function ordenarPorPromedio() {
    estudiantes.sort((a, b) => calcularPromedio(b.calificaciones) - calcularPromedio(a.calificaciones));
    mostrarEstudiantes();
  }
  
  // Generar rangos de estudiantes
  function generarRangos() {
    const contenedorRangos = document.querySelector("#rangos");
    contenedorRangos.innerHTML = ""; // Limpiar antes de mostrar
  
    estudiantes.forEach(estudiante => {
      const promedio = calcularPromedio(estudiante.calificaciones);
      const clasificacion = clasificarEstudiante(promedio);
      const rango = document.createElement("p");
      rango.textContent = `${estudiante.nombre}: ${clasificacion}`;
      contenedorRangos.appendChild(rango);
    });
  }
  
  // Clasificar estudiante
  function clasificarEstudiante(promedio) {
    if (promedio >= 90) return "Excelente";
    if (promedio >= 80) return "Bueno";
    if (promedio >= 70) return "Regular";
    return "Necesita Mejorar";
  }
  
  // Persistencia de datos usando localStorage
  function guardarDatos() {
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
  }
  
  function cargarDatos() {
    const datos = JSON.parse(localStorage.getItem("estudiantes"));
    if (datos) {
      estudiantes.length = 0;
      estudiantes.push(...datos);
      mostrarEstudiantes();
    }
  }
  
  // Cargar los datos al inicio
  window.onload = cargarDatos;
  