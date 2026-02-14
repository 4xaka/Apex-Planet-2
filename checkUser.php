<?php

$existingUsers = ["test@gmail.com","admin@gmail.com","ak@gmail.com"];

$email = $_GET['email'];

if(in_array($email,$existingUsers)){
echo "exists";
}else{
echo "available";
}

?>
