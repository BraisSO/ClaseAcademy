"use strict";
//tipo de dato tupla (con valores fijos)
let usuarios;
usuarios = [1, 'Pepe'];
//tipo dato enum (sucesion de valores constantes)
var rol;
(function (rol) {
    rol["ADMIN"] = "admin";
    rol["USER"] = "user";
})(rol || (rol = {}));
let personas = {
    nombre: 'pepe',
    rol: rol.ADMIN
};
console.log(personas.rol);
//tipo de dato union (permitir que las variables puedan ser de tipos alternativos)
let individuo;
individuo = 23;
individuo = "pepe";
//individuo=true;
//tipo de dato any (acepta cualquier tipo de dato)
let coches = [23, "mazda", true];
//tipo de dato undefined -> cuando una variable no está inicializada
let numero;
//tipo de dato null
let boton = document.getElementById("btn");
console.log(boton);
//tipo de dato void (indicar que una funcion no tiene retorno)
function message() {
    console.log("Saludos...");
}
message();
function message2() {
    return ("Saludos...");
}
