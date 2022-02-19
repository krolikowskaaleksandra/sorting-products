<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$question = $_POST["question"];


if(!empty($email) && !empty($question)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $receiver = "contact.akrolikowska@gmail.com";
        $title = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nSubject: &subject\nQuestion: $question\n\nRegards,\n$name";
        $sender = "From: $email";
        if(mail($receiver, $title, $body, $sender)){
            echo "Your message has been sent!";
        }else{
            echo "Sorry, failed to send your message!";
        }

    }else{
        echo "Enter a valid email address!";
    }

}else {
    echo "Email and message field are required!";
}

?>
