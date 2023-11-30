// Objeto que mapea identificadores de productos con descripciones detalladas
const descripcionesDetalladas = {
    producto1: "Descripción detallada del Producto 1.",
    producto2: "Descripción detallada del Producto 2.",
    // Agrega más productos según sea necesario
};

// Función para obtener la descripción detallada de un producto
function obtenerDescripcion(idProducto) {
    // Verifica si el identificador de producto existe en el objeto descripcionesDetalladas
    if (descripcionesDetalladas.hasOwnProperty(idProducto)) {
        // Devuelve la descripción detallada correspondiente
        return descripcionesDetalladas[idProducto];
    } else {
        // Si el identificador no está en el objeto, devuelve un mensaje de error
        return "Descripción detallada no disponible.";
    }
}

function cargar(btn) {
    // Obtener el contenedor del item (padre del botón)
    var item = btn.closest('.item');

    // Obtener el id del producto desde el atributo id del contenedor
    var idProducto = item.id;

    // Obtener la descripción del producto según el id
    var descripcionProducto = obtenerDescripcion(idProducto);

    // Clonar el elemento del item, excluyendo el botón de descripción
    var itemClonado = item.cloneNode(true);
    var btnDescripcionClonado = itemClonado.querySelector('#btn-description');
    if (btnDescripcionClonado != null) {
        console.log('El pirobo botón  está llegando');
        btnDescripcionClonado.remove(); // Eliminar el botón de descripción clonado
    }else if(btnDescripcionClonado == null){
        console.log('El pirobo botón no está llegando');
    }

    // Agregar la descripción detallada al párrafo con id "descripcionDetallada"
    var pDescripcionDetallada = itemClonado.querySelector('#descripcionDetallada');
    if (pDescripcionDetallada) {
        pDescripcionDetallada.textContent = descripcionProducto;
    }

    // Establecer el ancho máximo para la imagen dentro del modal
    var imgModal = itemClonado.querySelector('.seleccion #imagenITem');
    
    console.log(imgModal);

    if (imgModal != null) {
        console.log('la puta imagen se ajusta');
        imgModal.style.maxWidth = '150px';
    }else if(imgModal == null){
        console.log('la puta imagen ni siquiera está llegando');

    }

    // Limpiar el contenido existente del modal-body
    var modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = '';

    // Agregar el elemento clonado al modal-body
    modalBody.appendChild(itemClonado);

    // Abre el modal
    var modal = new bootstrap.Modal(document.getElementById('seleccion'));
    modal.show();
}

function ajustarTamanioImagenEnModal() {
    // Selecciona la imagen dentro del modal
    var imagenEnModal = document.querySelector('.modal-body .item img');

    // Aplica estilos a la imagen
    if (imagenEnModal) {
        imagenEnModal.style.maxWidth = "150px";
        imagenEnModal.style.height = "auto";
    }
}
