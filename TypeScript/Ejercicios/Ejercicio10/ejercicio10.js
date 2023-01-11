"use strict";
const form = document.querySelector("form");
const max = document.querySelector("#num1");
const min = document.querySelector("#num2");
let aleatorio = (min, max) => {
    min = min - 1;
    return Math.floor(Math.random() * (max - min) + min + 1);
};
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(aleatorio(parseInt(min.value), parseInt(max.value)));
});
