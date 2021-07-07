<?php
header('Access-Control-Allow-Origin: *');

// Connection
$conn = mysqli_connect('remotemysql.com','HOUofNyRvs','aYUPdgao2Z','HOUofNyRvs');

// Fetch data
$foodSelect = @($_POST['search']);

// Fetch data
$sql = mysqli_query($conn, " SELECT * FROM restaurants WHERE kind_food LIKE" . "'%{$foodSelect}%'" );

// Storing results
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

// Exit
exit(json_encode($result));
?>