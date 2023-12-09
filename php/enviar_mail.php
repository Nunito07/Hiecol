<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];

    // Configuración de PHPMailer para Gmail
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';  // Host de Gmail
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Configuración del mensaje
    $mail->setFrom($correo, $name);  // Utiliza la dirección de correo proporcionada en el formulario como remitente
    $mail->addAddress('sebastianzzz123456@gmail.com'); // Correo destino
    $mail->isHTML(true);
    $mail->Subject = 'Consulta de información';
    $mail->Body = "Nombre: $name<br>Correo: $correo<br>Mensaje: $mensaje";

    try {
        $mail->send();
        echo 'success';
    } catch (Exception $e) {
        echo "Error al enviar el correo: {$mail->ErrorInfo}";
    }
}
?>
