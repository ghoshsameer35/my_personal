<?php
include('dbconnect.php');


$data = file_get_contents("php://input");
$mydata = json_decode($data,true);
$email = $mydata['email'];
$name = $mydata['name'];
$password = $mydata['password'];

if(!empty($email) && !empty($name) && !empty($password)){
    $sql = "INSERT INTO demo1(email,name,password)VALUES('$email','$name','$password')";
    if($conn->query($sql) == TRUE){
        echo "Student seved";
    }else{
        echo"Unable";
    }
}else{
    echo "File All Fields";
}

?> 