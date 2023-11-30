
// Demander à l'utilisateur de rentrer un nombre
let number = parseFloat(prompt("Veuillez rentrer un nombre !"));


// La boucle s'exécutera jusqu'à ce que i soit plus petit ou égale à 10
for(let i = 1; i <= 10; i++){ // initialisation de i à 1 / condition de i +petit ou égal à 20 / itération de 1 à chaque tour de boucle
    console.log(number + " X " + i + " = " + (number*i));
    //J'affiche dans la console ma table de multiplication sous le format : 7 X 1 = 7 ...... 7 X 10 = 70 ( 7 étant le nombre rentré)
}



