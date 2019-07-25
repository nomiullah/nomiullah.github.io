<?php
  
/*    if(!preg_match("/^[\w]+[\w-.]*[@]{1}[-A-z0-9_]+[-A-z0-9_.]*[.]{1}[A-z]{2,5}$/",$_GET[email])) {
	
		echo "Please Enter Valid Email"; exit;
	}
	*/		
	include_once ('class.phpmailer.php');
	
	$Mail = new PHPMailer();
	$Mail -> ClearAllRecipients();
	
	$Mail -> AddAddress('a.sajid689@yahoo.com');
	$Mail -> AddCC($_GET["email"]);
	
	
	$Mail -> From = $_GET["email"];
	$Mail -> FromName = $_GET["name"];
	$Mail -> Subject ="Contact form filled at Daniel's Website";
	
	$Body = '
	<table width="520" border="0" cellpadding="3" cellspacing="5" style="font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; color:#000">
	  <tr>
		<td width="150"><strong>Name:</strong></td>
		<td width="350">'.$_GET["name"].'</td>
	  </tr>
	  <tr>
		<td width="150"><strong>Email:</strong></td>
		<td width="350">'.$_GET["email"].'</td>
	  </tr>
	  <tr>
		<td width="150"><strong>Number:</strong></td>
		<td width="350">'.$_GET["subject"].'</td>
	  </tr>
	  <tr>
		<td width="150"><strong>Message:</strong></td>
		<td width="350">'.$_GET["message"].'</td>
	  </tr>
	  <tr>
		<td>&nbsp;</td>
	  </tr>
	</table>';
	
	$Mail -> Body = $Body;
	$Mail -> IsHTML ('true');
  
	
	//echo '<pre>'; print_r($Mail); exit;
	if($Mail -> Send()) {
  
		echo 'success'; exit;
		
	}else{
		echo 'failure'; exit;
	}
?>