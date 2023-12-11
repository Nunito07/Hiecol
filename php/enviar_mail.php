<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;


require './phpmailer/Exception.php';
require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];

    try {

        // Configuración de PHPMailer para Gmail
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'smtp-relay.gmail.com';  // Host de Gmail
        $mail->SMTPSecure = 'tls';
        //$mail->SMTPSecure = 'ssl';
        $mail->Port = 587;

        // Configuración de autenticación SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'sebastianzzz123456@gmail.com';
        $mail->Password = 'tfinbpqtwgruvqkj';

        // Configuración del mensaje
        $mail->setFrom($correo, $name);  // Utiliza la dirección de correo proporcionada en el formulario como remitente
        $mail->addAddress('sebastianzzz123456@gmail.com'); // Correo destino
        $mail->isHTML(true);
        $mail->Subject = 'Consulta de información';
        $mail->Body = "Nombre: $name<br>Correo: $correo<br>Mensaje: $mensaje";
        
        $mail->send();
        echo 'success';
    } catch (Exception $e) {
        echo "Error al enviar el correo: {$mail->ErrorInfo}";
    }
}
