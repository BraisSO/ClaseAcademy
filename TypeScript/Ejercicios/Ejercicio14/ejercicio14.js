"use strict";
const formulario = document.querySelector("form");
const texto = document.querySelector("#texto");
const textContent = document.querySelector("#textoImpreso");
formulario.addEventListener("keyup", function () {
    textContent.innerHTML = texto.value;
});
