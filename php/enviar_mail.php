<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/Exception.php';
require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';

//define("destinatario", "sebastianzzz123456@gmail.com");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $celular = $_POST["celular"];
    $correo_remitente = filter_var($_POST["mail"], FILTER_SANITIZE_EMAIL);
    $empresa = $_POST["empresa"];
    $city = $_POST["ciudad"];
    $mensaje = $_POST["mensaje"];

    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'mail.hiecol.com.co';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->SMTPAuth = true;
        $mail->Username = 'no-responder@hiecol.com.co';
        $mail->Password = '-mt7n4&2*mHY';

        $mail->CharSet = 'UTF-8';
        $mail->setFrom("no-responder@hiecol.com.co", "$name");
        $mail->addAddress('Sistemas@hiecol.com');
        $mail->isHTML(true);
        $mail->Subject = 'CONSULTA DE INFORMACION';
        $mail->Body = "<html>
        <head>
            <style>
                /* Estilos para el cuerpo del correo */
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f4f4f4;
                }

                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                h2 {
                    color: #40B554;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 10px;
                }

                strong{
                    color: #40B554;
                }

                p {
                    color: #555;
                }
            </style>
        </head>
        <body>
            <div class='container'>
                <h2>Consulta de Información</h2>
                <p><strong>Nombre:</strong> $name</p>
                <p><strong>Celular:</strong> $celular</p>
                <p><strong>Correo:</strong> $correo_remitente</p>
                <p><strong>Empresa:</strong> $empresa</p>
                <p><strong>Ciudad:</strong> $city</p>
                <p><strong>Mensaje:</strong> $mensaje</p>
                <p>*Al seleccionar la opción responder, se dirigirá la respuesta directamente al correo 
                electrónico del usuario que haya solicitado la consulta de información</p>
            </div>
        </body>
        </html>
    ";
        $mail->addReplyTo($correo_remitente, $name);

        $mail->send();
        echo "Correo enviado correctamente";
        header("Location: ./index.html");
        exit();
    } catch (Exception $e) {
        echo "Error al enviar el correo: {$mail->ErrorInfo}";
    }
}
