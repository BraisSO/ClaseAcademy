"use strict";
let arrayNombres = ["Brais", "Martin", "Estrella"];
let parrafo = document.querySelector("#parrafo");
let boton = document.querySelector("button");
function pintarArray() {
    arrayNombres.forEach(nombre => {
        let lista = document.createElement("li");
        lista.innerHTML = nombre;
        parrafo.appendChild(lista);
    });
}
pintarArray();
let eliminarNombre = () => {
    arrayNombres.pop();
    parrafo.innerHTML = "";
    pintarArray();
};
boton.addEventListener("click", function () {
    eliminarNombre();
});
