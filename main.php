<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="Memory Match" content="width=device-width, initial-scale=1.0">
    <title>Memory Match</title>
    <link rel="stylesheet" href="main.html.CSS">
    
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