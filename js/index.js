import { loadEditor } from "./editor.js";




function loadJs() {
    let jsLoadedElement = document.getElementById('js-loaded');
    jsLoadedElement.innerHTML = 'Js est là ' ;
    jsLoadedElement.style.backgroundColor = 'yellow';
    jsLoadedElement.style.color = 'blue';
    jsLoadedElement.remove();

}


function loadHomeView(){
  fetch('/vues/home.html')
  .then(r => r.text())
  .then(r => {document.querySelector("main").innerHTML = r});

}
function loadEditorView(){
  fetch('/vues/editor.html')
  .then(r => r.text())
  .then(r => {
    document.querySelector("main").innerHTML = r;
    loadEditor();
  });
 

}

document.addEventListener('DOMContentLoaded',loadJs);