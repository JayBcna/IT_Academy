<?php
header('Access-Control-Allow-Origin: *');

// Variables with access data and db
$server = 'remotemysql.com';
$user = 'HOUofNyRvs';
$pass = 'aYUPdgao2Z';
$db = 'HOUofNyRvs';

// Call a new mysqli connection
$mysqli = new mysqli($server, $user, $pass, $db);

// Check the connection with the db
if (mysqli_connect_error()) {
    die("Database connection failed: " . mysqli_connect_error());
}
// Store db in an array()
$array_db = array();

// Creating a query
$query_1 = "SELECT * FROM restaurants";

if ($result = $mysqli->query($query_1)) {
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $array_db[] = $row;
    }
    echo json_encode($array_db);
}
// Closing the query and results
$result->close();
$mysqli->close();