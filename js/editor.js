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
    redrawSVG(currentMeme, editorSVGNode);
  }

  function onnumberinput(evt) {
    currentMeme[evt.target.name] = parseInt(evt.target.value);
    redrawSVG(currentMeme, editorSVGNode);
  }

  function oncheckbox(evt) {
    currentMeme[evt.target.name] = evt.target.checked;
    redrawSVG(currentMeme, editorSVGNode);
  }

  const form = document.forms["editor-form"];
  form.addEventListener('submit',(evt)=> {
    evt.preventDefault();
    currentMeme.save();
  })

  form["text"].addEventListener("input", ontextinput);
  form["fontWeight"].addEventListener("input", ontextinput);
  form["color"].addEventListener("input", ontextinput);
  form["x"].addEventListener("input", onnumberinput);
  form["y"].addEventListener("input", onnumberinput);
  form["fontSize"].addEventListener("input", onnumberinput);
  form["imageId"].addEventListener("input", onnumberinput);
  form["underline"].addEventListener("change", oncheckbox);
  form["italic"].addEventListener("change", oncheckbox);
}

function loadFromData(meme) {
  const form = document.forms["editor-form"];
  form["text"].value = meme.text ;
  form["fontWeight"].value = meme.fontWeight ;
  form["color"].value = meme.color;
  form["x"].value = meme.x ;
  form["y"].value = meme.y ;
  form["fontSize"].value = meme.fontSize ;
  form["imageId"].value =  meme.imageId ;
  form["underline"].checked = meme.underline ;
  form["italic"].checked = meme.italic ;

}
/**
 *
 * @param {Meme} meme : current Meme
 * @param {SVGSVGElement} node : node du text a mettre à jour
 */
function redrawSVG(meme, node) {
  console.log("redraw svg", node, meme);
  const text = node.querySelector("text");
  text.innerHTML = meme.text;
  text.setAttribute("fill", meme.color);
  text.setAttribute("font-size", meme.fontSize);
  text.setAttribute("font-weight", meme.fontWeight);
  text.setAttribute("x", meme.x);
  text.setAttribute("y", meme.y);
  text.setAttribute("text-decoration", meme.underline ? "underline" : "none");
  text.setAttribute("font-style", meme.italic ? "italic" : "none");

  const img = images.find((image) => image.id === meme.imageId);
  let imageSvg = node.querySelector("image");

  if (imageSvg) {
    imageSvg.remove(imageSvg);
  }
  if (img) {
    imageSvgREFNode.setAttribute("xlink:href", img.url);
    node.insertBefore(imageSvgREFNode, text);
    node.setAttribute("viewBox", `0 0 ${img.w} ${img.h}`);
  } else {
    node.setAttribute("viewBox", `0 0 500 500`);
  }
  console.log(img);
}

document.addEventListener("DOMContentLoaded", () => {
  editorSVGNode = document.querySelector("#editor svg");
  imageSvgREFNode = editorSVGNode.querySelector("image");
  
  loadFormEvent();
  images.promiseImages.then((loadedImages) => {
    loadComboBox(loadedImages);
    loadFromData(currentMeme);
    redrawSVG(currentMeme, editorSVGNode);
  } );
});

let currentMeme = new Meme();
let editorSVGNode = undefined;
let imageSvgREFNode = undefined;
