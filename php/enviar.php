<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);

    $destino = "daniel.formoso100@gmail.com";
    $assunto = "Contato - Portfólio Daniel";
    
    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$telefone;

    $cabeca = "From: daniel.formoso100@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if (mail($destino,$assunto,$corpo,$cabeca)) {
        echo("Email enviado com sucesso!");
    } else {
        echo("Houve um erro ao enviar o email!");
    }

?>