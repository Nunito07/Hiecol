function enviarCorreo() {
    $(".alerta_correo").css('display', 'none');
    $(".alerta_name").css('display', 'none');
    $(".alerta_msj").css('display', 'none');

    var name = $("#fullName").val();
    var mail = $("#mail").val();
    var msj = $("#msj").val();
    var valido = 1;
    var vald_mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!vald_mail.test(mail)) {
        $(".alerta_correo").css('display', 'block');
        valido = 0;
    }
    if (name.length <= 5) {
        $(".alerta_name").css('display', 'block');
        valido = 0;
    }
    if (msj.length <= 5) {
        $(".alerta_msj").css('display', 'block');
        valido = 0;
    }

    if (valido == 1) {
        alert('Mensaje enviado');
        var datos = '&name=' + name + '&correo=' + mail + '&mensaje=' + msj;

        // Limpiar campos después de enviar
        $("#fullName").val('');
        $("#mail").val('');
        $("#msj").val('');

        $.ajax({
            type: "POST",
            url: "../php/enviar_mail.php",
            data: datos,
            success: function (res) {
                // Manejar la respuesta del servidor
                alert(res); // Muestra el mensaje de éxito o cualquier otra respuesta
            },
            error: function () {
                // Manejar errores de la solicitud AJAX
                alert('Hubo un error en la solicitud AJAX');
            }
        });
    }
}
