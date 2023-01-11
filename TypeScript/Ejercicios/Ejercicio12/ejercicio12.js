"use strict";
const boton = document.querySelector(".boton");
let arrow = () => {
    alert("El boton ha sido pulsado");
};
boton.addEventListener("click", function () {
    arrow();
});
