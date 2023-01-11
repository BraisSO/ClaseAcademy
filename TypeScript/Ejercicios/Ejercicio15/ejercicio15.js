"use strict";
let boton = document.querySelector("button");
let texto = document.querySelector("#nombre");
let nombres = [];
boton.addEventListener("click", function (e) {
    e.preventDefault();
    if (nombres.length < 3) {
        nombres.push(texto.value);
        texto.value = "";
    }
    else {
        alert("Ya has agregado tres nombres");
        nombres.forEach(element => {
            console.log(element);
        });
    }
});
