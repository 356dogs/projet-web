class Carte {
  constructor(front_side, back_side,x,y){
      this.front_side = front_side;
      this.back_side = back_side;
      this.x = x;
      this.y = y;
  }    
}
// on a besoin de deux instances de la même carte pour former une paire

let carte1_1 = new Carte("cartes/Carte1.jpg", "cartes/Carte_back.jpg", 0, 0);
let carte1_2 = new Carte("cartes/Carte1.jpg", "cartes/Carte_back.jpg", 0, 0);

let carte2_1 = new Carte("cartes/Carte2.jpg", "cartes/Carte_back.jpg", 0, 0);
let carte2_2 = new Carte("cartes/Carte2.jpg", "cartes/Carte_back.jpg", 0, 0);

let carte3_1 = new Carte("cartes/Carte3.jpg", "cartes/Carte_back.jpg", 0, 0);
let carte3_2 = new Carte("cartes/Carte3.jpg", "cartes/Carte_back.jpg", 0, 0);

let carte4_1 = new Carte("cartes/Carte4.jpg", "cartes/Carte_back.jpg", 0, 0);
let carte4_2 = new Carte("cartes/Carte4.jpg", "cartes/Carte_back.jpg", 0, 0);

let carte5_1 = new Carte("cartes/Carte5.jpg", "cartes/Carte_back.jpg", 0, 0);
let carte5_2 = new Carte("cartes/Carte5.jpg", "cartes/Carte_back.jpg", 0, 0);

let carte6_1 = new Carte("cartes/Carte6.jpg", "cartes/Carte_back.jpg", 0, 0);
let carte6_2 = new Carte("cartes/Carte6.jpg", "cartes/Carte_back.jpg", 0, 0);

let carte7_1 = new Carte("cartes/Carte7.jpg", "cartes/Carte_back.jpg", 0, 0);
let carte7_2 = new Carte("cartes/Carte7.jpg", "cartes/Carte_back.jpg", 0, 0);

let carte8_1 = new Carte("cartes/Carte8.jpg", "cartes/Carte_back.jpg", 0, 0);
let carte8_2 = new Carte("cartes/Carte8.jpg", "cartes/Carte_back.jpg", 0, 0);

let carte9_1 = new Carte("cartes/Carte9.jpg", "cartes/Carte_back.jpg", 0, 0);
let carte9_2 = new Carte("cartes/Carte9.jpg", "cartes/Carte_back.jpg", 0, 0);

let carte10_1 = new Carte("cartes/Carte10.jpg", "cartes/Carte_back.jpg", 0, 0);
let carte10_2 = new Carte("cartes/Carte10.jpg", "cartes/Carte_back.jpg", 0, 0);

let liste_cartes = [carte1_1, carte1_2, carte2_1, carte2_2, carte3_1, carte3_2, carte4_1, carte4_2, carte5_1, carte5_2, carte6_1, carte6_2, carte7_1, carte7_2, carte8_1, carte8_2, carte9_1, carte9_2, carte10_1, carte10_2]; 

export { liste_cartes, Carte };

























































