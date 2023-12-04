

// Objeto que mapea identificadores de productos con descripciones
const descripciones = {
    producto1: "Descripción detallada del Producto 1.",
    producto2: "Descripción detallada del Producto 2.",
    // Agrega más productos según sea necesario
};

// Función para obtener la descripción de un producto
function obtenerDescripcion(idProducto) {
    // Verifica si el identificador de producto existe en el objeto descripciones
    if (descripciones.hasOwnProperty(idProducto)) {
        // Devuelve la descripción correspondiente
        return descripciones[idProducto];
    } else {
        // Si el identificador no está en el objeto, devuelve un mensaje de error
        return "Descripción no disponible.";
    }
}

function cargar(btn) {
    // Obtener el contenedor del item (padre del botón)
    var item = btn.closest('.item');

    // Obtener el id del producto desde el atributo id del contenedor
    var idProducto = item.id;

    // Obtener la descripción del producto según el id
    var descripcionProducto = obtenerDescripcion(idProducto);

    // Clonar el contenido del item
    var itemClonado = item.cloneNode(true);

    // Limpiar el contenido existente del modal-body
    var modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = '';

    // Agregar el item clonado al modal-body
    modalBody.appendChild(itemClonado);

    // Actualizar el contenido del modal con la descripción
    document.getElementById('descripcionProducto').innerText = descripcionProducto;

    // Ajustar el tamaño de la imagen en el modal
    ajustarTamanioImagenEnModal();

    // Abre el modal
    var modal = new bootstrap.Modal(document.getElementById('seleccion'));
    modal.show();
}

// Función para ajustar el tamaño de la imagen en el modal
function ajustarTamanioImagenEnModal() {
    // Selecciona la imagen dentro del modal
    var imagenEnModal = document.querySelector('.modal-body .item img');

    // Aplica estilos a la imagen
    if (imagenEnModal) {
        imagenEnModal.style.maxWidth = "150px";
        imagenEnModal.style.height = "auto";
    }
}
