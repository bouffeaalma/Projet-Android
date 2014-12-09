
<?php 
$formNom = $_POST['nom']; 

if(!empty($formNom)) 
{ 

$MessageInfo='Nom:'.utf8_decode($formNom)."\n"; 

if( mail('commanderaalma@gmail.com','Message',$MessageInfo) ) 
{ 
echo 'les informations ont bien été envoyées!'; 
} 
else 
{ 
echo 'une erreur est survenu lors de l\'envoi du message'; } 
} 
else 
{ 
//il y a des champs vide 
echo 'merci de remplir le champs nom'; 
} 
?> 
