//MENU DE HAMBURGESA

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//MODALES

  function mostrarDetalles(titulo, descripcion) {
    document.getElementById("modal-titulo").textContent = titulo;
    document.getElementById("modal-descripcion").textContent = descripcion;
    document.getElementById("modal").style.display = "block";
  }

  function cerrarModal() {
    document.getElementById("modal").style.display = "none";
  }

//BOTON DE AGREGAR AL CARRITO


function agregarAlCarrito(boton) {
  const mensaje = document.getElementById('mensaje-central');

  // Mostrar animación de carga
  boton.classList.add('btn-loading');

  // Simular espera de proceso
  setTimeout(() => {
    boton.classList.remove('btn-loading');

    // Mostrar el mensaje centrado
    mensaje.classList.add('visible');

    // Ocultar mensaje después de 2.5 segundos
    setTimeout(() => {
      mensaje.classList.remove('visible');
    }, 2500);
  }, 1500); // Tiempo de carga artificial
}



