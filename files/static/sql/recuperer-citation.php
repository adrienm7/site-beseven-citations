<?php

include "connexion-bdd.php";


$categorie=$_POST["categorie"];
if ($categorie=="Toutes") {
    $categorie="%";
}

$stmt = $bdd->prepare("SELECT * FROM Citations WHERE categorie LIKE ? ORDER BY RAND() LIMIT 1");
$stmt->execute(array($categorie));

$data = array();
while ($row=$stmt->fetch(PDO::FETCH_ASSOC)) {
  $data = $row;
}

$json = json_encode($data);
echo $json;


?>