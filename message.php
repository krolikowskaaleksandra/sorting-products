<?php

$name = $_POST["name"];
$email = $_POST["email"];
$text = $_POST["text"];
$question = $_POST["question"];


if(!empty($email) && !empty($question)){

}else {
    echo "Email and message field are required!";
}

?>
