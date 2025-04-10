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
        <h2>Difficulté : <span id="affiche_difficulte"></span></h2>
    </header>
    <div class="Grille-jeu" id="Grille-jeu">

    </div>
    <aside>
        <h1>Règles du jeu</h1>
        <h2>Dans le jeu Memory, le joueur doit retourner une paires identiques. Toutes les cartes sont étalées faces cachées. Il faut retourné toute les cartes le plus vite et en moins de temps possible pour avoir le meilleur score.</h2>
        <div class="timer">
            <h2>Temps restant : <span id="minutes">00</span>:<span id="secondes">00</span></h2>
        </div>
    </aside>

    <script type="module">

        import { liste_cartes } from './Gestion_Cartes.js';
        import { Creation_grille, Gestion_retournement} from './Gestion_Grille.js';

        const difficulte = localStorage.getItem('difficulte');
        console.log('Difficulte:', difficulte); 

        // On affiche la difficulté choisie sur la page
        document.getElementById('affiche_difficulte').textContent = difficulte || 'Facile';
        

        let x_grille = 4; 
        let y_grille = 2; // Valeurs par défaut

        let largeur_carte;
        let hauteur_carte;

        let temps_secondes = 0; // Temps en secondes
        let temps_minute = 0; // Temps en minutes

        let victoire = false; // Variable pour vérifier si le joueur a gagné
        
        switch(difficulte) {
            case 'Facile':
                x_grille = 4;
                y_grille = 2;
                largeur_carte = 163; // Largeur de la carte pour la difficulté facile
                hauteur_carte = 250; // Hauteur de la carte pour la difficulté facile
                temps_secondes = 45; // Temps de jeu pour la difficulté facile (2 minutes)
                document.getElementById('secondes').textContent = "45";
                break;
            case 'Moyen':
                x_grille = 4;
                y_grille = 3;
                largeur_carte = 108; // Largeur de la carte pour la difficulté moyenne
                hauteur_carte = 166; // Hauteur de la carte pour la difficulté moyenne
                temps_minute = 1;
                temps_secondes = 20; // Temps de jeu pour la difficulté moyenne (1 minute et 20 secondes)
                document.getElementById('secondes').textContent = "20";
                document.getElementById('minutes').textContent = "01";
                break;
            case 'Difficile':
                x_grille = 5;
                y_grille = 4;
                largeur_carte = 85; // Largeur de la carte pour la difficulté difficile
                hauteur_carte = 120; // Hauteur de la carte pour la difficulté difficile
                // Temps de jeu pour la difficulté difficile ( 2 minutes)
                temps_minute = 2;
                document.getElementById('minutes').textContent = "02";
                break;
            default:
                console.log('Difficulté non reconnue, utilisation des valeurs par défaut');
        }        
        let nb_paires_a_retourner = (x_grille * y_grille) / 2; // Nombre de paires à retourner
        let nb_paires_retourne = 0; // Compteur de paires retournées
        let nb_actions = 0; // Compteur d'actions (retournements de cartes)

        // On gère le temps de jeu basé sur la difficulté choisie
        let intervalle_temps;

        function decompte() {
            let temps_total = (temps_minute * 60) + temps_secondes; // Convert to total seconds
    
            intervalle_temps = setInterval(() => {
                temps_total--;
                
                // Calculate minutes and seconds
                const minutes = Math.floor(temps_total / 60);
                const secondes = temps_total % 60;
                
                // on rajoute des zeros au minutes et seconds pour le formatage
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('secondes').textContent = secondes.toString().padStart(2, '0');
                
                if (temps_total <= 0) {
                    clearInterval(intervalle_temps);
                    alert('Temps écoulé! Vous avez perdu!');
                    window.location.href = 'main.php';
                }
            }, 1000);
            return temps_total;
        }
        let temps_total = decompte();

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
                // il faut ajuster la taille de la carte en fonction du nombre de lignes et colonnes
                divCarte.style.width = `${largeur_carte}px`;
                divCarte.style.height = `${hauteur_carte}px`;
                
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
                    let resultats = await Gestion_retournement(grille, liste_retournement, nb_actions, nb_paires_retourne, nb_paires_a_retourner);
                    
                    liste_retournement = resultats[0];
                    nb_actions = resultats[1];
                    nb_paires_retourne = resultats[2];
                    victoire = resultats[3];
                    if (victoire === true){
                        Gestion_victoire();
                    }
                    }
                });

                divLigne.appendChild(divCarte);
            }
            grille_html.appendChild(divLigne);
        }

        function Gestion_victoire() {
            clearInterval(intervalle_temps); // arrete le timer
            
            // Calcul du score 
            const score = Math.round(((5 * x_grille) * (10 * y_grille)) - (3 * temps_restant) / (0.5 * nb_actions));
            console.log('Score final:', score);
            
            //
             
            
        }
        
    </script>
</body>
</html>