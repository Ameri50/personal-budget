# Sistema de Gestión de Estudiantes

Este proyecto es un sistema de gestión de estudiantes desarrollado con HTML, CSS y JavaScript. Permite agregar estudiantes, calcular promedios, ordenar estudiantes por calificaciones, filtrar por nombre, y generar reportes sobre el rendimiento académico.

## Descripción del Proyecto

El **Sistema de Gestión de Estudiantes** está diseñado para administrar y visualizar datos de estudiantes de manera eficiente. A través de una interfaz intuitiva, puedes agregar estudiantes, gestionar sus calificaciones y obtener una clasificación automática según su rendimiento académico.

El proyecto está desarrollado con una estructura moderna y responsiva, lo que permite utilizarlo en diversos dispositivos como computadoras, tabletas y móviles.

### Tecnologías utilizadas

- **HTML5**: Para la estructura de la página.
- **CSS3**: Para el diseño y la disposición visual.
- **JavaScript**: Para la lógica y la interacción dinámica.

## Funcionalidades Implementadas

1. **Agregar Estudiantes**:
   - Permite ingresar el nombre del estudiante y sus calificaciones (separadas por coma).
   - Calcula automáticamente el promedio de las calificaciones.
   - Determina si el estudiante ha aprobado o reprobado (promedio ≥ 70).

2. **Visualización Dinámica de Estudiantes**:
   - Los estudiantes se muestran en una tabla con columnas para el nombre, promedio, asistencia y estado (aprobado/reprobado).
   - Se puede ordenar la tabla por promedio de forma ascendente o descendente.

3. **Búsqueda de Estudiantes**:
   - Busca estudiantes en tiempo real por nombre para filtrar rápidamente la lista.

4. **Reporte de Rangos**:
   - Muestra un resumen con el número total de estudiantes, el número de aprobados y el número de reprobados.

5. **Persistencia de Datos**:
   - Se puede implementar persistencia de datos utilizando `localStorage` para almacenar los estudiantes y no perder la información al recargar la página.

## Ejemplos de Uso

### 1. Agregar un Estudiante

- Ingresa el nombre del estudiante en el campo "Nombre del estudiante".
- En el campo de calificaciones, ingresa una lista de calificaciones separadas por coma (ejemplo: `85, 90, 78`).
- Haz clic en **"Agregar Estudiante"** para calcular el promedio y agregar el estudiante a la tabla.

### 2. Buscar un Estudiante

- Usa el campo de búsqueda en la parte superior de la tabla para filtrar estudiantes por nombre.
- Los resultados se mostrarán dinámicamente a medida que escribes.

### 3. Ordenar por Promedio

- Haz clic en el botón **"Ordenar por Promedio"** para organizar a los estudiantes según sus calificaciones, de mayor a menor.

### 4. Generar el Reporte de Rangos

- En la parte inferior, el sistema genera automáticamente un reporte de los estudiantes aprobados y reprobados.
  
## Cómo Ejecutar el Proyecto

1. Clona el repositorio en tu máquina local

- bash [git clone https://github.com/Ameri50/sistema-calificaciones-js.git]
