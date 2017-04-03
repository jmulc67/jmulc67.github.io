<?php
$name = $_POST['name'];
$email = $_POST['email'];
$priority = $_POST['priority'];
$category = $_POST['category'];
$message = $_POST['message'];
$formcontent=" From: $name \n Priority: $priority \n category: $category \n Message: $message";
$recipient = "mulcahyjohn8@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>