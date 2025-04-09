import { liste_cartes } from './Gestion_Cartes.js';

//js n'a pas de fonction randint(min,max) prédefinie donc on doit la creer
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Etude_grille(x, y) {
  /*
  *etude_grille va etudier la forme de la grille et le nombre de paires de carte a creer
  * param x = le nombre de colonne de la matrice
  * param y = le nombre de ligne de la matrice
  */
  let totalCartes = x * y;
  if (totalCartes % 2 !== 0) {
    throw new Error('Le nombre total de cartes doit etre pair');
  } else {
    // creation de la grille de x*y cartes
    let grille = [];

    for (let lign = 0; lign < y; lign++) {
      grille.push([]);
      for (let col = 0; col < x; col++) {
        grille[lign].push('Placeholder');
      }
    }
    return [totalCartes, grille];
  }
}

function Setup_emplacements(x,y){
  let emplacements = [];
    // emplacement sert d'indexe pour inserer efficassement une carte dans grille
    for (let lign = 0; lign < y; lign++){
      for (let col = 0; col < x; col++){
        emplacements.push([lign,col])

      }
    }
    return emplacements; 
}

function Creation_grille(x,y,liste_cartes){
  /*creer une grille de jeu de x colonnes et y lignes remplie de paires d'objets de classe Carte
  *
  */
 // on prend les variables de la fonction etude_grille
  let resultats_etude_grille = Etude_grille(x, y);
  let nb_cartes = resultats_etude_grille[0];
  let grille = resultats_etude_grille[1];
  let emplacements = Setup_emplacements(x,y);

  for (let carte_indexe = 0; carte_indexe < nb_cartes; carte_indexe++){
    let random_index = randomInt(0, emplacements.length);
    let random_emplacement = emplacements[random_index];
    //on a notre position dans grille et notre index dans emplacements
    //on peut maintenant inserer la carte dans la grille et supprimer l'emplacement de la liste
    grille[random_emplacement[0]][random_emplacement[1]] = liste_cartes[carte_indexe]
    emplacements.splice(random_index, 1); 
    //on met a jour le x et le y de la carte en fonction de son emplacement
    liste_cartes[carte_indexe].x = random_emplacement[0];
    liste_cartes[carte_indexe].y = random_emplacement[1];  
  }  
  return grille
}

function Gestion_retournement(Grille,liste_retournement,carte){
    /* Gère le retournement des cartes et la validation de ce retournement
    */
    // on retourne la carte
    liste_retournement[liste_retournement.length-1].classList.add('flipped'); //on retourne la carte qui vient d'être ajouté
    carte.retourne = true;
    if (liste_retournement.length == 2) {
        // on verifie si les deux cartes sont identiques
        if (liste_retournement[0].queryselector(".carte-front").src == liste_retournement[1].queryselector(".carte-front").src) {
            // on les garde retournées et on vide la liste d'action
            liste_retournement = [];
        } 
        else {
            // on les retourne
            setTimeout(() => {
                liste_retournement[0].classList.remove('flipped');
                liste_retournement[1].classList.remove('flipped');
                liste_retournement = [];
            }, 1000);
        }
      console.log("fonction",liste_retournement);
    }
    return liste_retournement

 }    



export { Creation_grille, Gestion_retournement};



















