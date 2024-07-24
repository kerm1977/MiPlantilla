var fontSize = 1;

// funcion para aumentar la fuente
function zoomIn() {
    fontSize += 0.1;
    document.body.style.fontSize = fontSize + "em";
}

// funcion para disminuir la fuente
function zoomOut() {
    fontSize -= 0.1;
    document.body.style.fontSize = fontSize + "em";
}



