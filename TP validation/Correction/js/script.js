
// Fonction permettant d'afficher une image passée en paramètre dans un overlay par dessus la page
function openImage(imageName) {

    // Création de l'overlay
    let overlay = document.createElement('div');

    overlay.classList.add('overlay-turtle');

    // Création de l'image
    let image = document.createElement('img');

    image.setAttribute('src','../images/images-galerie/' + imageName + '');
    image.setAttribute('alt','');

    // Ajout de l'image dans l'overlay
    overlay.append(image);

    // Ajout de l'overlay dans la page
    document.querySelector('body').append(overlay);

    // Si l'overlay est cliqué, on appel la fonction permettant de la supprimer (et l'image avec)
    overlay.addEventListener('click', function(){
        removeImage();
    });

}

// Fonction permettant de supprimer l'overlay
function removeImage() {
    document.querySelector('.overlay-turtle').remove();
}

// Fonction permettant de mettre un champ de formulaire passé en paramètre en erreur (rouge plus message d'erreur passé en second paramètre)
function setError(field, errorText) {

    // Ajout de la classe CSS "is-invalid" pour passer le champ en bordure rouge
    field.classList.add('is-invalid');

    // Création du message d'erreur
    let errorElement = document.createElement('div');

    errorElement.classList.add('invalid-feedback');

    errorElement.textContent = errorText;

    // Ajout du message d'erreur dans la div contenant le champ
    field.parentElement.append(errorElement);

}

// Fonction permettant de supprimer toutes les erreurs et classes spéciales d'un formulaire
function resetForm(form) {
    let inputIsInvalid = form.querySelectorAll('.is-invalid');
    inputIsInvalid.forEach((input)=>{
        input.classList.remove('is-invalid');
    });
    let messages = form.querySelectorAll('.invalid-feedback');
    messages.forEach((message)=>{
        message.remove();
    });
}

// Attente chargement complet du DOM
document.addEventListener('DOMContentLoaded', function(){

    // Récupération de toutes les vignettes des configurations cliquables
    let miniatures = document.querySelectorAll('.container-img-turtle .turtle');
    // Si une tortue est cliquée, appel de la fonction permettant d'afficher l'image qui lui correspond (data-open)
    miniatures.forEach((miniature) => {
        miniature.addEventListener('click',function (){
            let sourceMiniature = this.dataset.open;
            openImage(sourceMiniature);
        });
    });

    // Si le formulaire de newsletter est envoyé
    document.querySelector('.newsletter .newsletter-area form').addEventListener('submit',function (e) {

        // Empêche le formulaire de rediriger
        e.preventDefault();

        // Stock le formulaire pour s'en servir plus tard
        let form = this;
        console.log(form);
        // Nettoie le formulaire d'éventuelles précédentes validations
        resetForm(form);

        // Récupération du champ email dans le formulaire
        let emailField = form.querySelector('.email');
        console.log(emailField);

        // Si la valeur du champ email contient moins de 10 caractères, erreur
        if (emailField.value.length < 10) {

            setError(emailField, 'Le champ doit contenir au moins 10 caractères');
        } else {

            // Création du message de succès
            let successElement = document.createElement('div');
            successElement.classList.add('alert-success');
            successElement.textContent = 'Vous avez bien été inscrits à la newsletter !';

            // Insertion du message de succès après le formulaire
            form.after(successElement);

            // Suppression du formulaire
            form.remove();

        }

    });

});