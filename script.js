let equipoSeleccionado = null; // Variable para almacenar el equipo seleccionado

function agregarEquipo() {
    const marcaInput = document.getElementById("marcaInput");
    const ramInput = document.getElementById("ramInput");
    const procesadorInput = document.getElementById("procesadorInput");
    const almacenamientoInput = document.getElementById("almacenamientoInput");
    const tipoInput = document.getElementById("tipoInput");

    const marca = marcaInput.value.trim();
    const ram = ramInput.value.trim();
    const procesador = procesadorInput.value.trim();
    const almacenamiento = almacenamientoInput.value.trim();
    const tipo = tipoInput.value;

    if (marca === "" || ram === "" || procesador === "" || almacenamiento === "" || tipo === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Agregar a la tabla de equipos ingresados
    const tablaEquipos = document.getElementById("tablaEquipos").getElementsByTagName('tbody')[0];
    
    const nuevaFila = tablaEquipos.insertRow();
    
    const celdaMarca = nuevaFila.insertCell(0);
    celdaMarca.textContent = marca;

    const celdaRam = nuevaFila.insertCell(1);
    celdaRam.textContent = ram;

    const celdaProcesador = nuevaFila.insertCell(2);
    celdaProcesador.textContent = procesador;

    const celdaAlmacenamiento = nuevaFila.insertCell(3);
    celdaAlmacenamiento.textContent = almacenamiento;

    const celdaTipo = nuevaFila.insertCell(4);
    celdaTipo.textContent = tipo;

    const celdaAcciones = nuevaFila.insertCell(5);
    
    // Crear botón para seleccionar el equipo
    const botonSeleccionar = document.createElement("button");
    botonSeleccionar.textContent = "Seleccionar";
    
    botonSeleccionar.onclick = function() {
        seleccionarEquipo(nuevaFila);
    };
    
    celdaAcciones.appendChild(botonSeleccionar);
    
    // Limpiar los inputs
    marcaInput.value = "";
    ramInput.value = "";
    procesadorInput.value = "";
    almacenamientoInput.value = "";
    tipoInput.selectedIndex = 0; // Reiniciar selección
}

function seleccionarEquipo(fila) {
    equipoSeleccionado = fila; // Guardar la fila seleccionada
    document.getElementById("formSalida").style.display = "block"; // Mostrar formulario de salida
}

function confirmarSalida() {
    const nombreEntregaInput = document.getElementById("nombreEntregaInput");
    
    const nombreEntrega = nombreEntregaInput.value.trim();

    if (nombreEntrega === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

   // Obtener datos del equipo seleccionado
   const celdas = equipoSeleccionado.cells;
   const marca = celdas[0].textContent;
   const ram = celdas[1].textContent;
   const procesador = celdas[2].textContent;
   const almacenamiento = celdas[3].textContent;
   const tipo = celdas[4].textContent;

   // Agregar a la tabla de equipos salidos
   const tablaSalidas = document.getElementById("tablaSalidas").getElementsByTagName('tbody')[0];
   
   const nuevaFilaSalida = tablaSalidas.insertRow();
   
   nuevaFilaSalida.insertCell(0).textContent = marca;
   nuevaFilaSalida.insertCell(1).textContent = ram;
   nuevaFilaSalida.insertCell(2).textContent = procesador;
   nuevaFilaSalida.insertCell(3).textContent = almacenamiento;
   nuevaFilaSalida.insertCell(4).textContent = tipo;
   nuevaFilaSalida.insertCell(5).textContent = nombreEntrega;

   // Eliminar de la tabla de equipos ingresados
   equipoSeleccionado.remove();

   // Limpiar y ocultar formulario
   nombreEntregaInput.value = "";
   document.getElementById("formSalida").style.display = "none";
}