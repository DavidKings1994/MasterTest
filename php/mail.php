<?php
session_start();
header('Cache-control: private');

if(isSet($_GET['lang'])) {
    $lang = $_GET['lang'];
    $_SESSION['lang'] = $lang;
    setcookie('lang', $lang, time() + (3600 * 24 * 30));
} else if(isSet($_SESSION['lang'])) {
    $lang = $_SESSION['lang'];
} else if(isSet($_COOKIE['lang'])) {
    $lang = $_COOKIE['lang'];
} else {
    $lang = 'en';
}

switch ($lang) {
    case 'en':
    $lang_file = 'lang.en.php';
    break;

    case 'es':
    $lang_file = 'lang.es.php';
    break;

    default:
    $lang_file = 'lang.en.php';
}
include 'languages/'.$lang_file;


$eol="\n";
$emailaddress = "contact@davidreyes.tk";
$msg .= "--".$mime_boundary.$eol;
$msg .= wordwrap($_POST['message'],70);
$msg .= $eol;
$msg .= "--".$mime_boundary."--".$eol.$eol;

$subject = "Mensaje de ".$_POST['name'];
$headers .= "From: " . $_POST['name'] . "<" . $_POST['mail'] . ">" . $eol;
$headers .= "CC: <david.reyes.1994@hotmail.com>" . $eol;
$headers .= "Reply-To: " . $_POST['name'] . "<" . $_POST['mail'] . ">" . $eol;

if(!mail($emailaddress, $subject, $msg, $headers)) {
    echo "error";
} else {
    echo $lang['MAIL_MESSAGE_DONE'];
}
?>
