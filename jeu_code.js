import Math from 'mathjs';

class Carte{
    constructor(ID, front_side,back_side){
        this.ID = ID;
        this.front_side = front_side;
        this.back_side = back_side;
    }    
}

// on a besoin de deux instances de la même carte pour former une paire
let carte1_1 = new Carte(1, "placeholder.png", "back.png");
let carte1_2 = new Carte(1, "placeholder.png", "back.png");

let carte2_1 = new Carte(2, "placeholderazaza.png", "back.png");
let carte2_2 = new Carte(2, "placeholderazaza.png", "back.png");

let carte3_1 = new Carte(3, "placeholder.png", "back.png");
let carte3_2 = new Carte(3, "placeholder.png", "back.png");

let carte4_1 = new Carte(4, "placeholder.png", "back.png");
let carte4_2 = new Carte(4, "placeholder.png", "back.png");

let carte5_1 = new Carte(5, "placeholder.png", "back.png");
let carte5_2 = new Carte(5, "placeholder.png", "back.png");

let carte6_1 = new Carte(6, "placeholder.png", "back.png");
let carte6_2 = new Carte(6, "placeholder.png", "back.png");

let carte7_1 = new Carte(7, "placeholder.png", "back.png");
let carte7_2 = new Carte(7, "placeholder.png", "back.png");

let carte8_1 = new Carte(8, "placeholder.png", "back.png");
let carte8_2 = new Carte(8, "placeholder.png", "back.png");

let carte9_1 = new Carte(9, "placeholder.png", "back.png");
let carte9_2 = new Carte(9, "placeholder.png", "back.png");

let carte10_1 = new Carte(10, "placeholder.png", "back.png");
let carte10_2 = new Carte(10, "placeholder.png", "back.png");

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
      return emplacements  
  }
  
function creation_grille(x,y){
    /*creer une grille de jeu de x colonnes et y lignes remplie de paires d'objets de classe Carte
    *
    */
    //let liste_cartes = [carte1_1, carte1_2, carte2_1, carte2_2, carte3_1, carte3_2, carte4_1, carte4_2, carte5_1, carte5_2, carte6_1, carte6_2, carte7_1, carte7_2, carte8_1, carte8_2, carte9_1, carte9_2, carte10_1, carte10_2]; 
    // on prend les variables de la fonction etude_grille
    let resultats_etude_grille = etude_grille(x, y);
    let nb_cartes = resultats_etude_grille[0];
    let grille = resultats_etude_grille[1];
    let emplacements = setup_emplacements(x,y);
    
    console.log(nb_cartes);
    for (let carte = 0; carte < nb_cartes; carte++){
      for (let col = 0; col < 2; col++){
        //let random_emplacement = randomInt(0, emplacements.length);
        
        // a finir !!!
        
      }
    }  
  }
  
  creation_grille(4,4);






























