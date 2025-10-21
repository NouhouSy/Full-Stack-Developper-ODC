function upDate(previewPic) {
    
    // Récupérer l'élément div avec l'id "image"
    const imageDiv = document.getElementById('image');
    
    // 1) Changer l'image de fond avec l'URL de l'image survolée
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // 2) Changer le texte avec l'attribut alt de l'image survolée
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    
    // Récupérer l'élément div avec l'id "image"
    const imageDiv = document.getElementById('image');
    
    // 1) Remettre l'image de fond par défaut (vide ou image originale)
    imageDiv.style.backgroundImage = "url('')";
    
    // 2) Remettre le texte original
    imageDiv.innerHTML = "Hover over an image below to display here.";
}