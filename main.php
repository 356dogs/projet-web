<?php

$host = 'localhost'; 
$dbname = 'memory'; 
$username = 'root'; 
$password = ''; 

try {
    $connection = new PDO(
        'mysql:host=localhost;port=3307;dbname=memory_bd;charset=utf8',
        'root',     // nom utilisateur
        '',         // mdp, laisser vide si pas de mdp
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['pseudo'])) {
    $pseudo = htmlspecialchars($_POST['pseudo']);

    $stmt = $pdo->prepare("INSERT INTO utilisateur (pseudo) VALUES (:pseudo)");
    $stmt->bindParam(':pseudo', $pseudo);

    if ($stmt->execute()) {
            echo "<p>Bienvenue, $pseudo ! Votre pseudo a été enregistré.</p>";
    } else {
            echo "<p>Erreur lors de l'enregistrement du pseudo.</p>";
    }
}
}catch(PDOException $erreur) {
    die("Erreur de connection: " . $erreur->getMessage());
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="Memory Match" content="width=device-width, initial-scale=1.0">
    <title>Memory Match</title>
    <link rel="stylesheet" href="main.css">
    
</head>
<body>
    <h1>Jeu du Memory</h1>
    pseudo:
    <input type="text" name="pseudo" id="pseudo"/><br> <br>
    
    <div class="buttons">
        <button onclick="Difficulte('Facile')">Facile</button>
        <button onclick="Difficulte('Moyen')">Moyen</button>
        <button onclick="Difficulte('Difficile')">Difficile</button>
    </div>

    <a href="score.php">
        <input type="button" value="Record" name="record" id="bouton"/>
    </a>

    <script>
        function Difficulte(difficulte) {
            localStorage.setItem('difficulte', difficulte);
            window.location.href = 'jeuMemory.php';
        }
    </script>
</body>