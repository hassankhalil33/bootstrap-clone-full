<?php

include("connection.php");

$query = $mysql -> prepare("SELECT * FROM contacts");
$query -> execute();
$array = $query -> get_result();

$response = [];

while($i = $array -> fetch_assoc()){
    $response[] = $i;
}

echo json_encode($response);

?>
