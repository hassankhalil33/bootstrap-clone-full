<?php

include("connection.php");

$userName = $_POST["userName"];
$userEmail = $_POST["userEmail"];
$userPhone = $_POST["userPhone"];
$userMessage = $_POST["userMessage"];

$query = $mysqli -> prepare("INSERT INTO contacts(name, email, phone, message) VALUE (?, ?, ?,  ?)");
$query -> bind_param("ssss", $userName, $userEmail, $userPhone, $userMessage);
$query -> execute();

echo json_encode("success");

?>