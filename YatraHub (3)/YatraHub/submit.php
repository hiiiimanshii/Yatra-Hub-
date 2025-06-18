<?php
// Database configuration
$host = 'localhost';
$dbname = 'yatrahub';
$user = 'postgres';
$password = 'anshu';

// Create a PostgreSQL database connection
$conn = pg_connect("host=$host dbname=$dbname user=$user password=$password");

if (!$conn) {
    die("Connection failed: " . pg_last_error());
}

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fullName = $_POST['full_name'];
    $dob = $_POST['dob'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $gender = $_POST['gender'];
    $occupation = $_POST['occupation'];

    // Insert data into the database
    $query = "INSERT INTO users (full_name, dob, email, mobile, gender, occupation) VALUES ($1, $2, $3, $4, $5, $6)";
    $result = pg_query_params($conn, $query, array($fullName, $dob, $email, $mobile, $gender, $occupation));

    if ($result) {
        echo "Registration successful!";
    } else {
        echo "Error: " . pg_last_error($conn);
    }

    // Close the connection
    pg_close($conn);
}
?>
