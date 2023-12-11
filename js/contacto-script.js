function enviarCorreo() {
    $(".alerta_name").css('display', 'none');
    $(".alerta_cel").css('display', 'none');
    $(".alerta_correo").css('display', 'none');
    $(".alerta_empresa").css('display', 'none');
    $(".alerta_city").css('display', 'none');
    $(".alerta_msj").css('display', 'none');

    var name = $("#fullName").val();
    var celular = $("#celular").val();
    var mail = $("#mail").val();
    var empresa = $("#empresa").val();
    var ciudad = $("#ciudad").val();
    var msj = $("#msj").val();
    var valido = 1;
    var vald_mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name.length <= 5) {
        $(".alerta_name").css('display', 'block');
        valido = 0;
    }
    if (celular.length <= 5) {
        $(".alerta_cel").css('display', 'block');
        valido = 0;
    }
    if (!vald_mail.test(mail)) {
        $(".alerta_correo").css('display', 'block');
        valido = 0;
    }
    if (empresa.length <= 5) {
        $(".alerta_empresa").css('display', 'block');
        valido = 0;
    }
    if (ciudad.length <= 5) {
        $(".alerta_city").css('display', 'block');
        valido = 0;
    }
    if (msj.length <= 5) {
        $(".alerta_msj").css('display', 'block');
        valido = 0;
    }

    if (valido == 1) {
        var datos = '&name=' + name + '&celular=' + celular + '&mail=' + mail + '&empresa=' + empresa + '&ciudad=' + ciudad + '&mensaje=' + msj;

        // Limpiar campos después de enviar
        $("#fullName").val('');
        $("#celular").val('');
        $("#mail").val('');
        $("#empresa").val('');
        $("#ciudad").val('');
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
