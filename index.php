<?php
session_start();

include("db.php");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $email = $_POST['mail'];
    $mdp = $_POST['mdp'];

    if (!empty($email) && !empty($mdp) && !is_numeric($email)) {
        $query = "SELECT * FROM form WHERE email = '$email' LIMIT 1";
        $result = mysqli_query($con, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            $user_data = mysqli_fetch_assoc($result);
            if ($user_data['mdp'] == $mdp) {
                // Identifiants corrects, création de la session
                $_SESSION['user_id'] = $user_data['id'];
                $_SESSION['user_email'] = $user_data['email'];
                header("location: connexion.php");
                exit;
            }
        }
        echo "<script type='text/javascript'> alert('Adresse e-mail ou mot de passe incorrect')</script>";
    } else {
        echo "<script type='text/javascript'> alert('Adresse e-mail ou mot de passe incorrect')</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
        <link rel="stylesheet" href="style.css">

</head>
<body>
<div class="connecter">
    <h1>VOUS ETES SUR LA PAGE DE CONNEXION</h1>
    <h4>RENSEIGNEZ VOS INFORMATIONS</h4>

    <form method="POST">
        <label>email</label>
        <input type="text" name="mail" required>

        <label>mot de passe</label>
        <input type="password" name="mdp" required>

        <input type="submit" name="" value="connexion">
    </form>
    <p>Vous n'avez pas encore de compte <a href="s'inscrire.php">Inscrivez-Vous</a></p>
</div>

</body>
</html>
