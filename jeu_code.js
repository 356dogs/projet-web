class Carte{
    constructor(ID, front_side,back_side){
        this.ID = ID;
        this.front_side = front_side;
        this.back_side = back_side;
    }    
}

new Carte(1, "placeholder.png");
new Carte(2, "placeholder.png");
new Carte(3, "placeholder.png");
new Carte(4, "placeholder.png");
new Carte(5, "placeholder.png");
new Carte(6, "placeholder.png");
new Carte(7, "placeholder.png");
new Carte(8, "placeholder.png");
new Carte(9, "placeholder.png");
new Carte(10, "placeholder.png");

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

function creation_grille(x,y){
    /*
    *
    */

}


















































