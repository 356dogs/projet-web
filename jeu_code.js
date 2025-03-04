class Carte{
    constructor(ID, front_side,back_side){
        this.ID = ID;
        this.front_side = front_side;
        this.back_side = back_side;
    }    
}

let carte1 = new Carte(1, "placeholder.png", "back.png");
let carte2 = new Carte(2, "placeholder.png", "back.png");
let carte3 = new Carte(3, "placeholder.png", "back.png");
let carte4 = new Carte(4, "placeholder.png", "back.png");
let carte5 = new Carte(5, "placeholder.png", "back.png");
let carte6 = new Carte(6, "placeholder.png", "back.png");
let carte7 = new Carte(7, "placeholder.png", "back.png");
let carte8 = new Carte(8, "placeholder.png", "back.png");
let carte9 = new Carte(9, "placeholder.png", "back.png");
let carte10 = new Carte(10, "placeholder.png", "back.png");

function etude_grille(x,y){
    /*
    *etude_grille va etudier la forme de la grille et le nombre de paires de carte a creer
    *
    */
    let totalCartes = x * y 
    if ((totalCartes % 2) !== 0){
        throw new Error("Le nombre total de cartes doit etre pair");
        return 1;
    }
    else{
        //nombre de paires de cartes, on va regarder le nombres de paires a créer.
        let paires = totalCartes / 2;
        return paires;
    }
}

function creation_grille(x,y,paires){
    /*creer une grille de jeu de x colonnes et y lignes remplie de paires d'objets de classe Carte
    *
    */
    grille = []
    for (let i = 0; i < )
}


















































