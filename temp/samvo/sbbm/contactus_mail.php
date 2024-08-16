<?php
	$contact_from_name = 'SBB Mail Sender';
	$contact_from = 'sbb-server@samvogroup.com';
	$contact_to = 'wesley.wai@samvogroup.com';//'sbbmarketing@samvogroup.com';
	$contact_bcc = '';	
	
	//*** Uniqid Session ***//  
	$strSid = md5(uniqid(time()));
	$strHeader = "From:".$contact_from_name."<".$contact_from.">\r\n";
	$strHeader .= "To:".$contact_to."\r\n";
	$strHeader .= "Return-Path:".$contact_from_name."<".$contact_from.">\r\n";
	$strHeader .= "MIME-Version: 1.0\r\n";
	$strHeader .= "Bcc:".$contact_bcc."\r\n";
	$strHeader .= "Content-Type: multipart/mixed; boundary=\"".$strSid."\"\n\n";  
	$strHeader .= "This is a multi-part message in MIME format.\n";  
	$strHeader .= "--".$strSid."\n";  
	$strHeader .= "Content-type: text/html; charset=utf-8\n";  
	$strHeader .= "Content-Transfer-Encoding: 7bit\r\n";	
	
	$strSubject = 'sbb contact us - '.$_POST['Subject'];
	$strSubject = "=?UTF-8?B?" . base64_encode($strSubject) . "?=";
	
	$strMessage = "";
	$strMessage .= "<html>";
	$strMessage .= "<head><title>Brokerage Contact Us (mobile)</title></head>";
	$strMessage .= "<body>";
	$strMessage .= "<style>body,table,tr,td{font-size:9pt; font-family:arial;</style>";
	$strMessage .= "<b>Brokerage Contact (from mobile)</b>";
	$strMessage .= "<br>";
	$strMessage .= "<br>";
	$strMessage .= "<table cellspacing='1' cellpadding='5' border='0' bgcolor='#000000' width='95%'>";
	$strMessage .= "	<tr>";
	$strMessage .= "		<td bgcolor='#ffffff'>Name</td>";
	$strMessage .= "		<td bgcolor='#ffffff'>".$_POST['Name']."</td>";
	$strMessage .= "	</tr>";
	$strMessage .= "	<tr>";
	$strMessage .= "		<td bgcolor='#ffffff'>Email</td>";
	$strMessage .= "		<td bgcolor='#ffffff'>".$_POST['Email']."</td>";
	$strMessage .= "	</tr>";
	$strMessage .= "	<tr>";
	$strMessage .= "		<td bgcolor='#ffffff'>Subject</td>";
	$strMessage .= "		<td bgcolor='#ffffff'>".$_POST['Subject']."</td>";
	$strMessage .= "	</tr>";
	$strMessage .= "	<tr>";
	$strMessage .= "		<td bgcolor='#ffffff'>Message</td>";
	$strMessage .= "		<td bgcolor='#ffffff'>".$_POST['Message']."</td>";
	$strMessage .= "	</tr>";
	$strMessage .= "	<tr>";
	$strMessage .= "		<td bgcolor='#ffffff'>IP</td>";
	$strMessage .= "		<td bgcolor='#ffffff'>".$_SERVER['REMOTE_ADDR']."</td>";
	$strMessage .= "	</tr>";
	$strMessage .= "</table>";
	$strMessage .= "<br>";
	$strMessage .= "<br>";
	$strMessage .= date(DATE_RFC822);
	$strMessage .= "<br>";
	$strMessage .= "<br>";
	$strMessage .= "</body>";
	$strMessage .= "</html>";
		
	$ok = @mail($contact_to, $strSubject, $strMessage, $strHeader);
	
	if($ok){
		echo "is_success=1";
	}else{
		echo "is_success=0";
	};
?>