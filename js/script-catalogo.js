function cargar(btn) {
    // Obtener el contenedor del item (padre del botón)
    var item = btn.closest('.item');

    // Obtener el id del producto desde el atributo id del contenedor
    var idProducto = item.id;

    // Obtener la descripción detallada del producto según el id
    var descripcionDetallada = obtenerDescripcionDetallada(idProducto);

    // Clonar el contenido del item excluyendo el botón de descripción
    var itemClonado = item.cloneNode(true);
    var btnDescripcionClonado = itemClonado.querySelector('#btn-description');
    btnDescripcionClonado.remove(); // Excluir el botón de descripción

    // Limpiar el contenido existente del modal-body
    var modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = '';

    // Agregar el item clonado al modal-body
    modalBody.appendChild(itemClonado);

    // Actualizar el contenido del modal con la descripción detallada
    document.getElementById('descripcionDetallada').innerText = descripcionDetallada;

    // Abre el modal
    var modal = new bootstrap.Modal(document.getElementById('seleccion'));
    modal.show();
}

// Objeto que mapea identificadores de productos con descripciones detalladas
const descripcionesDetalladas = {
    producto1: "Descripción detallada del Producto 1.",
    producto2: "Descripción detallada del Producto 2.",
    // Agrega más productos según sea necesario
};

// Función para obtener la descripción detallada de un producto
function obtenerDescripcionDetallada(idProducto) {
    // Verifica si el identificador de producto existe en el objeto descripcionesDetalladas
    if (descripcionesDetalladas.hasOwnProperty(idProducto)) {
        // Devuelve la descripción detallada correspondiente
        return descripcionesDetalladas[idProducto];
    } else {
        // Si el identificador no está en el objeto, devuelve un mensaje de error
        return "Descripción detallada no disponible.";
    }
}
