<html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Game 4x2</title>
    <link rel="stylesheet" href="JeuMemory.css">
</head>
<body>
    <header>
        <h1>Jeu en cours</h1>
        <h3>TEMPS : 0</h3>
    </header>
    <div class="Grille-jeu" id="Grille-jeu">

    </div>

    <script type="module">

        import { liste_cartes } from './Gestion_Cartes.js';
        import { Creation_grille, Gestion_retournement} from './Gestion_Grille.js';

        const difficulte = localStorage.getItem('difficulte');
        console.log('Difficulte:', difficulte); 

        let x_grille = 4; 
        let y_grille = 2; // Valeurs par défaut
        
        switch(difficulte) {
            case 'Facile':
                x_grille = 4;
                y_grille = 2;
                break;
            case 'Moyen':
                x_grille = 4;
                y_grille = 3;
                break;
            case 'Difficile':
                x_grille = 5;
                y_grille = 4;
                break;
            default:
                console.log('Difficulté non reconnue, utilisation des valeurs par défaut');
        }
        

        let liste_retournement = []; // liste des Divs de cartes retournées

        // Creation de la grille aleatoire 
        const grille = Creation_grille(x_grille, y_grille, liste_cartes);
        
        // On saisie la grille html dans le code
        const grille_html = document.getElementById('Grille-jeu');

        //on a besoin d'un compteur pour savoir combien de cartes on a retourner.
        let nb_cartes_retourne = 0;
        
        for(let y = 1; y < y_grille+1; y++){ // y colonnes
            const divLigne = document.createElement('div'); //pour ajuster l'espace ligne par ligne (dans le CSS)
            divLigne.className = 'DivLigne';


            for(let x = 1; x < x_grille+1; x++){ // x lignes
                const divCarte = document.createElement('div');
                divCarte.className = 'DivCarte';

                const backSide = document.createElement('img');
                backSide.className = 'carte-back';
                backSide.src = "cartes/Carte_back.jpg";

                const frontSide = document.createElement('img');
                frontSide.className = 'carte-front';
                frontSide.src = grille[y-1][x-1].front_side;
                
                divCarte.appendChild(backSide);
                divCarte.appendChild(frontSide);

                divCarte.addEventListener('click', async () => {
                if (!divCarte.classList.contains('flipped') && liste_retournement.length < 2) {
                    liste_retournement.push(divCarte);
                    liste_retournement = await Gestion_retournement(grille, liste_retournement, grille[y-1][x-1]);
                }
                });

                divLigne.appendChild(divCarte);
            }
            grille_html.appendChild(divLigne);
        }
    </script>
</body>
</html>