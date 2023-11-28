// Puedes agregar scripts adicionales aquí si es necesario

// Ejemplo de manejo de envío de formulario con jQuery
$(document).ready(function () {
    $('#contactForm').submit(function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        // Agregar lógica para enviar el formulario a través de AJAX u otro método
        alert('Formulario enviado');
    });
});
