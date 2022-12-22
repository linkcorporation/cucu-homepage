<!DOCTYPE html>
<html lang="ja">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<!-- favicon  -->
	<link rel="shortcut icon" href="../img/cucu_shortcut_icon.ico" type="image/x-icon">
	<!-- swiper css -->
	<link rel="stylesheet" href="../css/plugins/swiper.min.css">
	<!-- fancybox css -->
	<link rel="stylesheet" href="../css/plugins/fancybox.min.css">
	<!-- cucu css -->
	<link rel="stylesheet" href="../css/style.css">
	<!-- page title -->
	<title>CuCu.co.ltd</title>
</head>

<body onLoad="setTimeout('delayedRedirect()', 5000)">

	<?php

	/* Validate User Inputs
	==================================== */

	// Name 
	if ($_POST['name'] != '') {

		// Sanitizing
		$_POST['name'] = filter_var($_POST['name'], FILTER_SANITIZE_STRING);

		if ($_POST['name'] == '') {
			$errors .= 'Please enter a valid name.<br/>';
		}
	} else {
		// Required to fill
		$errors .= 'Please enter your name.<br/>';
	}

	// Email 
	if ($_POST['email'] != '') {

		// Sanitizing 
		$_POST['email'] = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

		// After sanitization validation is performed
		$_POST['email'] = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

		if ($_POST['email'] == '') {
			$errors .= 'Please enter a valid email address.<br/>';
		}
	} else {
		// Required to fill
		$errors .= 'Please enter your email address.<br/>';
	}

	// Message
	if ($_POST['message'] != '') {

		// Sanitizing
		$_POST['message'] = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

		if ($_POST['message'] == '') {
			$errors .= 'Please enter a valid message.<br/>';
		}
	}

	// Continue if NO errors found after validation
	if (!$errors) {

		// Customer Details
		$customer_name = $_POST['name'];
		$customer_mail = $_POST['email'];
		$customer_message = $_POST['message'];

		/* Mail Sending
		==================================== */

		// Setup for site owner
		$to = "websolutions.ultimate@gmail.com"; // Your email goes here	
		$subject = "Request";
		
		$headers = "From: cucu <replyto@yourdomain.com>";		

		$message = "Request is arrived with the details below." . "\n\n";
		$message .= "CONTACT DATA" . "\n";
		$message .= "--\n";
		$message .= "Name: " . $customer_name . "\n";
		$message .= "Email: " . $customer_mail . "\n\n";
		$message .= "MESSAGE" . "\n";
		$message .= "--\n";
		$message .= $customer_message . "\n";

		// Send to site owner
		mail($to, $subject, $message, $headers);

		// Setup for the user
		$user = $_POST['email'];
		$usersubject = "Request confirmation";
		$usermessage = "Dear " . $customer_name . "," . "\n\n" . "Thank you for contacting us. We will reply shortly." . "\n\n";
		$usermessage .= "Best Regards," . "\n";
		$usermessage .= "cucu Team";

		// Send to the user
		mail($user, $usersubject, $usermessage, $headers);

		// Success Page
		echo '<div id="success">';
		echo '<div class="icon icon-order-success svg">';
		echo '<svg width="72px" height="72px">';
		echo '<g fill="none" stroke="#C57642" stroke-width="2">';
		echo '<circle cx="36" cy="36" r="35" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>';
		echo '<path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>';
		echo '</g>';
		echo '</svg>';
		echo '</div>';
		echo '<h4>Thank you for contacting us.</h4>';
		echo '<small>Check your mailbox.</small>';
		echo '</div>';
		echo '<script src="../js/redirect.js"></script>';
	} else {

		// Error Page
		echo '<div style="color: #e9431c">' . $errors . '</div>';
		echo '<div id="success">';
		echo '<h4>Something went wrong.</h4>';
		echo '<a class="animated-link" href="../index.html">Go Back</small>';
		echo '</div>';
	}

	?>
	<!-- END PHP -->

</body>

</html>