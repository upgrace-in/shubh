<?php
if(isset($_POST['message'])){
    // $to      = 'sdchopra1990@gmail.com';
    $to = 'anitamakharia@shubhkamanaye.com';
    $message = $_POST['message']; 
    $name = $_POST['sender_name'];
    $email = $_POST['sender_email'];
    $phone = $_POST['mobile_number'];
    
    $message = "Message : ".$message.", Name : ".$name.", Phone : ".$phone.", Email : ".$email."";
    $message = wordwrap($message, 200, "\r\n");

    $subject = "You have a message from ".$name."";
    if(mail($to, $subject, $message, 
    "From ".$name."")) {
        echo json_encode(['success'=>true]); 
    }
    else {
        echo json_encode(['success'=>false]);
    }
}
?>