function cargar(button) {
    // Objeto que mapea identificadores de productos con descripciones
    const descripciones = {
        producto1: "Descripción detallada del Producto 1.",
        producto2: "Descripción detallada del Producto 2.",
        producto3: "Descripción detallada del Producto 1.",
        producto4: "Descripción detallada del Producto 2.",
        producto5: "Descripción detallada del Producto 1.",
        producto6: "Descripción detallada del Producto 2.",
        producto7: "Descripción detallada del Producto 1.",
        producto8: "Descripción detallada del Producto 2.",
        producto9: "Descripción detallada del Producto 1.",
        producto10: "Descripción detallada del Producto 2.",
        producto11: "Descripción detallada del Producto 1.",
        producto12: "Descripción detallada del Producto 2.",
        producto13: "Descripción detallada del Producto 1.",
        producto14: "Descripción detallada del Producto 2.",
        producto15: "Descripción detallada del Producto 1.",
        producto16: "Descripción detallada del Producto 2.",
        producto17: "Descripción detallada del Producto 1.",
        producto18: "Descripción detallada del Producto 2.",
        producto19: "Descripción detallada del Producto 1.",
        producto20: "Descripción detallada del Producto 2.",
        producto21: "Descripción detallada del Producto 2."
    };
    
    // Identificar el elemento del item
    const item = button.parentElement.parentElement.parentElement;

    // Clonar el contenido del item, excluyendo el botón #btn-description
    const itemClone = item.cloneNode(true);
    itemClone.querySelector("#btn-description").remove();

    // Obtener el ID del item clonado
    const itemId = itemClone.id.replace("producto", "");

    // Obtener la descripción del item
    const description = descripciones["producto" + itemId];

    // Limpiar el contenido del modal
    document.getElementById("modalItemContent").innerHTML = "";

    // Agregar el contenido del item clonado al modal
    itemClone.style.display = "block";
    document.getElementById("modalItemContent").appendChild(itemClone);

    // Agregar la descripción al modal
    document.getElementById("descripcionDetallada").innerText = description;
}


// Añadir evento click a todos los botones de descripción
const buttons = document.querySelectorAll("#btn-description");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        cargar(this);
    });
});



