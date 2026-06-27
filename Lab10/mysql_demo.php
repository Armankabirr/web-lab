<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webk";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("Connection Failed $conn->connect_error");
}

$sql = "SELECT * FROM student;";

$result = $conn->query($sql);

if($result->num_rows >0)
    {
        while($row = $result->fetch_assoc()){
            echo "ID: $row[ID], Name: $row[NAME], Semester: $row[SEMESTER] <br> ";
        }
    }
else
    {
        echo "0 results";
    }

?>