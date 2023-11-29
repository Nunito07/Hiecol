<?php 
    if(isset($_POST['name']) && 
    isset($_POST['mail']) && 
    isset($_POST['msj'])){
        $name = $_POST['name'];
        $mail = $_POST['mail'];
        $msj = $_POST['msj'];

        $from = $mail;
		$to = "sebastianzzz123456@gmail.com";
		$subject = "Nuevo mensaje de ". $mail;
        $fullName = $name;
		$message = $msj;
		$headers = "From:" . $from;
 
mail($to,$subject,$message, $headers);
    }
?>