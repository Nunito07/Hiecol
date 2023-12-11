<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/Exception.php';
require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';

define("destinatario", "sebastianzzz123456@gmail.com");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $celular = $_POST["celular"];
    $correo = filter_var($_POST["mail"], FILTER_SANITIZE_EMAIL);
    $empresa = $_POST["empresa"];
    $city = $_POST["ciudad"];
    $mensaje = $_POST["mensaje"];

    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        $mail->SMTPAuth = true;
        $mail->Username = 'sebastianzzz123456@gmail.com';
        $mail->Password = 'oknmrgeobsdgbapx';

        $mail->CharSet = 'UTF-8';
        $mail->FromName = $name;
        $mail->addAddress(destinatario);
        $mail->isHTML(true);
        $mail->Subject = 'CONSULTA DE INFORMACION';
        $mail->Body = "Nombre: $name<br>Celular: $celular<br>Correo: $correo<br>Empresa: $empresa<br>Ciudad: $city<br>Mensaje: $mensaje";
        $mail->addReplyTo($correo, $name);

        $mail->send();
        echo 'Correo enviado correctamente.';
    } catch (Exception $e) {
        echo "Error al enviar el correo: {$mail->ErrorInfo}";
    }
}

?>
