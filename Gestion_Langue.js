// Dictionnaire qui contient les traductions avec la selection de langue.        
const Langue = {
    fr: {
        Langue_en: "Anglais",
        Langue_fr: "Français",
        title: "Jeu de Memory",
        subtitle: "Le jeu de mémoire",
        start: "Commencer",
        quit: "Quitter"
    },
    en: {
        Langue_en: "English",
        Langue_fr: "French",
        title: "Memory Match",
        subtitle: "The Memory Game",
        start: "Start",
        quit: "Quit"
    }
};

function changerLangue() {
    const langue = document.getElementById('LanguageSelect').value;
    const elements = document.querySelectorAll('[data-lang]');
    //document est un objet qui represente la page web et ses elements
    //elements est un ensemble d'informations concernant la page web
    //il nous faut seulement la valeur de l'attribut data-lang
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = Langue[langue][key];
    });

    // Mettre à jour l'attribut lang de la page
    document.documentElement.lang = langue;
}

// Appliquer la traduction au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    changerLangue();
});