<?php

$conn = mysqli_connect("localhost", "root", "", "internship_db");

$result = mysqli_query($conn, "SELECT * FROM users");

while ($row = mysqli_fetch_assoc($result)) {
    echo $row['name'] . " - " . $row['email'] . "<br>";
}

?>
