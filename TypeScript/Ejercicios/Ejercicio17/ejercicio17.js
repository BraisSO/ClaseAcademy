"use strict";
let cantidad = document.querySelector("#cantidad");
let diametro = document.querySelector("#diametro");
let peso = document.querySelector("#peso");
let boton = document.querySelector("#boton");
let creadorPiezas = (cantidad, diametro, peso) => {
    const pieza = {
        cantidad: cantidad,
        diametro: diametro,
        peso: peso
    };
    return pieza;
};
boton.addEventListener("click", function () {
    console.log(creadorPiezas(parseInt(cantidad.value), parseInt(diametro.value), parseInt(peso.value)));
});
