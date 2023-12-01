/*
    Exercice 10 :

    1) Sélectionner l'élément ayant la classe ".start" dans le deuxième container

    2) Sélectionner le 4ème "li" du premier container à partir de l'élément ".start", puis l'afficher dans la console.
*/

// 1) Selectionner l'élement ".start"
let startElement = document.querySelector('li.start');

// 2) Selectionner l'élément à selectionner à partir de l'élément ".start"
let target = startElement.parentElement.parentElement.parentElement.previousElementSibling.children[2].children[3];
// Selection du parent de notre startElement
// Puis Sélection de la div parent section
// Puis Sélection de la div parent container
// Puis Sélection du frère avant lui
// Puis Sélection du 3em enfant qui se trouve dans le 1er container
// Enfin Selection du 4eme li

// 3) Afficher l'élément sélectionné dans la console
console.log(target);