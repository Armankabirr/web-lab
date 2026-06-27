<?php

function seatCalculator($attendees, $capacity, $price): array {
    $screen = ceil($attendees/$capacity);
    $empty = ($screen * $capacity) - $attendees;
    $wasted = $empty * $price;
    return [$screen, $empty, $wasted];
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $attendees = $_POST['attendees'];
    $capacity = $_POST['capacity'];
    $price = $_POST['price'];
    $result = seatCalculator($attendees, $capacity, $price);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result</title>
</head>
<body>
    <p>Total Screens: <?= $result[0] ?> </p> <br>
    <p>Empty Seats: <?= $result[1] ?> </p> <br>
    <p>Wasted Money: <?= $result[2] ?> </p>
</body>
</html>