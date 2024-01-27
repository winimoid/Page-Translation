
function changeLanguage() {
    var selectedLanguage = document.getElementById("langSelector").value;

    // Charger le fichier de ressources linguistiques correspondant
    fetch('/_i18n/' + selectedLanguage + '.yml')
        .then(response => response.text())
        .then(data => {
            // Convertir le contenu YAML en objet JavaScript
            var translations = YAML.eval(data);

            // Mettre à jour le contenu de la page avec les traductions
            updatePageContent(translations);
        })
        .catch(error => console.error('Erreur lors de la récupération du fichier :', error));
}

function updatePageContent(translations) {
    // Utiliser les traductions pour mettre à jour chaque élément de la page
    document.getElementById("welcomeMessage").innerText = translations.welcome;

    document.getElementById("passage").innerText = translations.passage;
    // Ajouter d'autres mises à jour au besoin
}
