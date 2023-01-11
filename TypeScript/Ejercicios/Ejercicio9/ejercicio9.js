"use strict";
const formulario = document.querySelector("form");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const suma = (numero1, numero2) => {
    return numero1 + numero2;
};
formulario.addEventListener("submit", function () {
    alert(suma(parseInt(num1.value), parseInt(num2.value)));
});
