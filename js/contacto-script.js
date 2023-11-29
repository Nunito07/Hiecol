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
        console.log(name);
    }
    if (msj.length <= 5) {
        $(".alerta_msj").css('display', 'block');
        valido = 0;
        console.log(msj);
    }
    if (valido == 1) {
        var datos =  '&name' + name + '&correo=' + mail + '&mensaje=' + msj;
        $.ajax({
            type: "POST",
            url: "enviar.php",
            data: datos,
            success: function (res) {

            },
            error: function (res) {
            }
        });
    }

}
