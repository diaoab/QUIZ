<?php
    session_start();

    include("db.php");

    if($_SERVER['REQUEST_METHOD'] == "POST")
    {
        $prenom = $_POST['prenom'];
        $nom = $_POST['nom'];
        $adresse = $_POST['adresse'];
        $email = $_POST['mail']; 
        $mdp = $_POST['password']; 

        if(!empty($email) && !empty($mdp) && !is_numeric($email)) 
        {
            $query = "INSERT INTO form (prenom, nom, adresse, email, mdp) VALUES ('$prenom', '$nom', '$adresse', '$email', '$mdp')";

            mysqli_query($con, $query);

            echo "<script type='text/javascript'> alert('L\'inscription a été effectuée avec succès')</script>";
        }
        else
        {
            echo "<script type='text/javascript'> alert('Veuillez renseigner des informations valides!')</script>";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>s'inscrire</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="inscrire">
        <h1>Veuillez remplir ce formulaire</h1>
        <h4>C'est gratuit et cela ne vous prendra que quelques minutes</h4>
           
        <form method="post">
            <label>Prénom</label>
            <input type="text" name="prenom" required>    

            <label>Nom</label>
            <input type="text" name="nom" required>

            <label>Adresse</label>
            <input type="text" name="adresse" required>

            <label>email</label>
            <input type="email" name="mail" required>

            <label>Mot de passe</label>
            <input type="password" name="password" required>

            <input type="submit" name="btn_submit" value="Soumettre">
        </form> 
        <p>En cliquant sur le bouton Soumettre, vous acceptez <a href="#">les termes et conditions</a> ainsi que <a href="#">la politique de confidentialité</a>.</p>
        <p>Avez-vous déjà créé un compte? <a href="index.php">Se connecter</a></p>
    </div>
</body>
</html>
