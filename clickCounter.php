<?php


$FileLocation = './click.log';

if (empty($_GET['link'])) {
  exit;
}
$f = fopen($_SERVER['DOCUMENT_ROOT'] . $FileLocation, 'a');
if (!$f) {
  exit;
}
fwrite($f, date('Y-m-d H:i:s') . "\t" . $_SERVER['REMOTE_ADDR'] . "\t" . $_GET['page'] . "\t" . $_GET['link'] . "\n");
fclose($f);
