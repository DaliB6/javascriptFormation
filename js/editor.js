/**
 * chargement du combo box du formulaire
 * @param {Images} mesImages
 */
function loadComboBox(mesImages) {
  const imageComboBox = document.forms["editor-form"]["imageId"];
  const noImageOption = imageComboBox.querySelector('option[value="-1"]');
  mesImages.forEach((element) => {
    const cloned = document.createElement("option");
    cloned.value = element.id;
    cloned.innerHTML = element.name;
    imageComboBox.appendChild(cloned);
  });
}

function loadFormEvent() {
  function ontextinput(evt) {
    currentMeme[evt.target.name] = evt.target.value;
    console.log(currentMeme);
  }

  function onnumberinput(evt){
    currentMeme[evt.target.name] = parseInt(evt.target.value);
    console.log(currentMeme);
  }

  const form = document.forms["editor-form"];
  form["text"].addEventListener("input", ontextinput);
  form["fontWeight"].addEventListener("input", ontextinput);
  form["color"].addEventListener("input", ontextinput);
  form["x"].addEventListener("input", onnumberinput);
  form["y"].addEventListener("input", onnumberinput);
  form["fontSize"].addEventListener("input", onnumberinput);
  form["imageId"].addEventListener("input", onnumberinput);
  
}

document.addEventListener("DOMContentLoaded", () => {
  loadFormEvent();
  images.promiseImages.then((loadedImages) => loadComboBox(loadedImages));
});

let currentMeme = new Meme();
