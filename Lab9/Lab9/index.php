<?php

// print
echo "Hello World <br>";

// variable declaration
$number = 10;

// concatenation
echo "The number is " . $number . " and it is even. <br>";
echo "The number is $number and it is even. <br>";

// if-else block
if ($number %2 == 0){
    echo "$number is even <br>";
    }
else {
    echo "$number is odd <br>";
}

//for loop
for($i=1; $i<=$number; $i++){
    echo "$i ";
}
echo "<br>";

//array
$arr1 = []; //option 1
$arr2 = array(); //option 2
$arr3 = [1,2,3,4,5]; 
$arr4 = array(6,7,8,9,10);

//printing array
print_r($arr3);

echo "<pre>";
print_r($arr4);
echo "</pre>";

//array modification
$arr3[5] = 6; //add
$arr3[3] = 13; //replace
unset($arr3[2]); //delete

print_r($arr3);

//array merge
$result = array_merge($arr3, $arr4);
echo "<pre>";
print_r($result);
echo "</pre>";

//array length
echo "Length of arr3 is " . sizeof($arr3). "<br>";
echo "Length of arr4 is " . count($arr4). "<br>";

//Associative array ['key' => "value"]
$data = ['name' => "Alice", 'id' => 201, 'age' => 20];

echo "<br>";

//for-each
foreach ($data as $key => $value)
    echo "Key: $key, Value: $value <br>";

//function
function greet($name): void {
    echo "Hi, $name";
}

greet("Alice");

$username = "Bob";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hi, <?php echo $username;?> </h1>
    <h1>Hi, <?= $username ?> </h1>
</body>
</html>