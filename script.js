function upDate(previewPic) {
    console.log("Événement déclenché (mouseover ou focus) !");
    console.log("Alt de l'image :", previewPic.alt);
    console.log("Source de l'image :", previewPic.src);
    
    const imageDiv = document.getElementById('image');
    console.log("Élément trouvé :", imageDiv);
    
    imageDiv.innerHTML = previewPic.alt;
    console.log("Texte mis à jour :", previewPic.alt);
    
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    console.log("Background-image mis à jour :", imageDiv.style.backgroundImage);
    console.log("-----------------------------------");
}

/* Fonction unDo - déclenché par mouseout et blur */
function unDo() {
    console.log("Événement de sortie déclenché (mouseout ou blur) !");
    
    const imageDiv = document.getElementById('image');
    
    imageDiv.style.backgroundImage = "url('')";
    console.log("Background-image réinitialisé à : url('')");
    
    imageDiv.innerHTML = "Hover over an image below to display here.";
    console.log("Texte réinitialisé");
    console.log("-----------------------------------");
}

/* Fonction addTabIndex - appelée au chargement de la page */
function addTabIndex() {
    console.log("=== Fonction addTabIndex() appelée au chargement de la page ===");
    
    // Récupérer toutes les images avec la classe "preview"
    const images = document.querySelectorAll('.preview');
    console.log("Nombre d'images trouvées :", images.length);
    
    // Boucle for pour ajouter tabindex à chaque image
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Tabindex ajouté à l'image", (i + 1), "- Alt:", images[i].alt);
    }
    
    console.log("✅ Tous les attributs tabindex ont été ajoutés avec succès !");
    console.log("Vous pouvez maintenant utiliser la touche Tab pour naviguer entre les images.");
    console.log("===================================");
}

/* Écouteur d'événement onload - appelle addTabIndex */
window.onload = function() {
    console.log("🚀 Page chargée - Initialisation...");
    addTabIndex();
};