
let animal = { // Objet animal
    //Mes 4 attributs
    kind: 'chat', // Attribut type d'animal
    origin:'Japon', // Attribut provenance de l'animal
    nature:'calme', // Attribut caractère de l'animal
    age: 2, // Attribut Age de l'animal

    // Mes 2 méthodes
    eat: function(){ // Méthode manger
        alert('est entrain de manger');
    },

    drink: function(){ // Méthode boire
        alert('est entrain de boire');
    },
}

// Affichera Il s'agit d'un chat originaire du Japon. Il a un caractère plutôt calme et il a 2 ans.
alert( 'Il s\'agit d\'un ' + animal.kind + ' originaire du ' + animal.origin + '. Il a un caractère plutôt ' + animal.nature + ' et il a ' + animal.age + ' ans.');

// Affichera est entrain de manger
animal.eat();





