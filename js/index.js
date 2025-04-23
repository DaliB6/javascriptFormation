
function loadJs() {
    var jsLoadedElement = document.getElementById('js-loaded');
    jsLoadedElement.innerHTML = 'Js est là ' ;
    jsLoadedElement.style.backgroundColor = 'yellow';
    jsLoadedElement.style.color = 'blue';
    jsLoadedElement.remove();

}

document.addEventListener('DOMContentLoaded',loadJs);