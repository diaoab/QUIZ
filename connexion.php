<?php
    include('db.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form login and register</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>

    <div class="app">
        <h1>Bienvenue cher joueur</h1>
        <h4>Avez-vous les compétences nécessaires pour réussir ce Quiz?</h4>
        <div class="quiz">
            <h2 id="question">Questionnaire</h2>
            <div id="answer-buttons"> 
                <button class="btn">Answer 1</button>
                <button class="btn">Answer 2</button>
                <button class="btn">Answer 3</button>
                <button class="btn">Answer 4</button>
            </div>
            <button id="next-btn">Suivant</button><br/>
            <button><a href="index.php">Deconnexion</a></button>

        </div>
    <script src="script.js"></script>
    </div>   

    
</body>
</html>