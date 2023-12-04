
/* Exercice 12 : Plein de titres en rouge !


    - Chaque titre cliqué doit changer en couleur rouge.

    Bonus : si on reclique sur un titre, il revient en noir !
*/

document.querySelectorAll('h2').forEach((title) => {

    title.addEventListener('click', function(){

        this.classList.add('red');

        // version bonus : this.classList.toggle('red');

    });

});