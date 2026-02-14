<?php

$existingUsers = ["ak@gmail.com","admin@gmail.com","test@gmail.com"];

$email = $_GET["email"];

if(in_array($email,$existingUsers)){
    echo "exists";
}else{
    echo "available";
}

?>
