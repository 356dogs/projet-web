<?php
//connection a la base de donnée
try {
$connection = new PDO(
    'mysql:host=localhost;port=3307;dbname=memory_bd;charset=utf8',
    'root',     // nom utilisateur
    '',         // mdp, laisser vide si pas de mdp
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);
// cherche tout les utilisateurs et leurs scores
$query_safe = $connection->prepare("SELECT utiPseudo, utiHighscore FROM utilisateur ORDER BY utiHighscore DESC");
$query_safe->execute();
//
$resultats = $query_safe->fetchAll(PDO::FETCH_ASSOC);

} catch(PDOException $erreur) {
    die("Erreur de connection: " . $erreur->getMessage());
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="Memory Match" content="width=device-width, initial-scale=1.0">
    <title>Memory Match</title>
    <link rel="stylesheet" href="score.CSS">
    
</head>
    <body> 
        <center>
        <a href="main.php">
        <h2>retour</h2>
        </a>
        <h2>
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <th>Pseudo</th>
                <th>Point</th>
            </tr>
            <?php foreach ($resultats as $row): ?>
            <tr>
                <td><?php echo htmlspecialchars($row['utiPseudo']); ?></td>
                <td><?php echo htmlspecialchars($row['utiHighscore']); ?></td>
            </tr>
            <?php endforeach; ?>
        </table>
        <center>
        </h2>
    </body>
</html>