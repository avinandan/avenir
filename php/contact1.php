<?php
	
    //If there is no error, send the email
      //  $emailTo = "kunalgaurav18@gmail.com"; //Put your own email address here
        //$body = "Name: Kunal \n\nEmail: avenir@gmail.com \n\nSubject: Testing \n\nComments:\n Test Message";
	//	$subject = "This is the subject to test";
      //  $headers = "MIME-Version: 1.0" . "\r\n";
//		$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	//	$headers .= 'From: domain' . "\r\n";

        $sent = mail("kunalgaurav18@gmail.com", "Subject is this", "body is this");
        if ($sent) {
                //If message is sent
                echo "SEND"; 
            } else {
                //If errors are found
                echo "<strong>Error!</strong> Required fields are not filled or filled incorrectly, please send a check and try again."; 
            }
?>