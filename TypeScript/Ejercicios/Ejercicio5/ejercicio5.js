"use strict";
var enumerado;
(function (enumerado) {
    enumerado["BLANCO"] = "blanco";
    enumerado["ROJO"] = "rojo";
    enumerado["NEGRO"] = "negro";
})(enumerado || (enumerado = {}));
;
let usuario;
usuario = [
    { nombre: "Brais", preferencias: enumerado.BLANCO },
    { nombre: "Martin", preferencias: enumerado.ROJO }
];
for (const key in usuario) {
    if (Object.hasOwnProperty.call(usuario, key)) {
        const element = usuario[key];
        document.write("<ul>" + "<li>" + element.nombre + "</li>");
        document.write("<li>" + element.preferencias + "</li>" + "</ul>");
    }
}
