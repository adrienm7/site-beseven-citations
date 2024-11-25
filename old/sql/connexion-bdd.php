<?php
$config = parse_ini_file(__DIR__."/../../../config_bdd_citations.ini");
$dbname = $config["dbname"];
$username = $config["username"];
$password = $config["password"];

try
{
	$bdd = new PDO('mysql:host=localhost; dbname='.$dbname.'; charset=utf8', $username, $password);
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

?>