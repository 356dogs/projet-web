import { Carte, cards, liste_cartes } from './Gestion_carte.js';

//js n'a pas de fonction randint(min,max) prédefinie donc on doit la creer
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

  function etude_grille(x, y) {
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

function setup_emplacements(x,y){
  emplacements = []
    // emplacement sert d'indexe pour inserer efficassement une carte dans grille
    for (let lign = 0; lign < y; lign++){
      for (let col = 0; col < x; col++){
        emplacements.push([lign,col])

      }
    }
    return emplacements; 
}

function creation_grille(x,y,liste_cartes){
  /*creer une grille de jeu de x colonnes et y lignes remplie de paires d'objets de classe Carte
  *
  */
 // on prend les variables de la fonction etude_grille
  let resultats_etude_grille = etude_grille(x, y);
  let nb_cartes = resultats_etude_grille[0];
  let grille = resultats_etude_grille[1];
  let emplacements = setup_emplacements(x,y);

  for (let carte_indexe = 0; carte_indexe < nb_cartes; carte_indexe++){
    let random_index = randomInt(0, emplacements.length);
    let random_emplacement = emplacements[random_index];
    //on a notre position dans grille et notre index dans emplacements
    //on peut maintenant inserer la carte dans la grille et supprimer l'emplacement de la liste
    grille[random_emplacement[0]][random_emplacement[1]] = liste_cartes[carte_indexe]
    emplacements.splice(random_index, 1);   
  }  
  return grille
}

function insertion_html_grille(x,y){
   // Get the body element to append our grid
   const body = document.querySelector('body');
    
   // Remove existing grid if any
   const existingGrids = document.querySelectorAll('grid');
   existingGrids.forEach(grid => grid.remove());
  }

  function createGrid(rows, cols) {
    const container = document.createElement('div');
    container.className = 'grid-container';
    
    // Set CSS Grid properties
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gap = '10px';
    container.style.padding = '20px';
    
    // Create cells based on rows and columns
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.dataset.index = i;
        
        // Create image element for the card
        const img = document.createElement('img');
        img.src = "cartes/Carte_back.jpg";
        img.className = 'card-image';
        
        cell.appendChild(img);
        container.appendChild(cell);
    }
    
    return container;
}


























