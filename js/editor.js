/**
 * chargement du combo box du formulaire
 * @param {Images} mesImages 
 */
function loadComboBox(mesImages) {
    
    const imageComboBox = document.forms['editor-form']['imageId'];
    const noImageOption = imageComboBox.querySelector('option[value="-1"]');
    mesImages.forEach(element => {

        const cloned = document.createElement('option');
        cloned.value = element.id;
        cloned.innerHTML = element.name;
        imageComboBox.appendChild(cloned);

    }) 
    
    
}



