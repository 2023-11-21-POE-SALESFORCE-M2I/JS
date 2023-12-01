/*

Exercice 11 :

1) Créer une fonction JS permettant de créer un overlay HTML et de l'insérer dans la page (dans le body)

2) Créer une fonction permettant de supprimer l'overlay sur la page

*/

// Fonction pour créer un overlay par dessus la page

function setOverlay(){
    // Création de la div overlay
    let overlay = document.createElement('div');

    // on met la classe css overlay sur la div (nécessaire pour que l'overlay ait les propriétés décrites dans le CSS)
    overlay.classList.add('overlay');

    // On insère la div dans le body en premier
    document.querySelector('body').prepend(overlay);
}

// Fonction pour supprimer un overlay

function removeOverlay(){
    // Création d'une variable qui selectionne l'overlay
    let overlay = document.querySelector('div.overlay');

    // Suppression de l'overlay par son parent
    overlay.remove();
}
