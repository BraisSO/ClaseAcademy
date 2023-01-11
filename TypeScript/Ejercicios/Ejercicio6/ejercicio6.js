"use strict";
let usuario = String(prompt("Introduce tu usuario: "));
let apellido = String(prompt("Introduce tu apellido: "));
let email = String(prompt("Introduce tu email: "));
function funcionInput(usuario, apellido, email) {
    document.write("<p>" + usuario + "<br>" + apellido + "<br>" + email + "</p>");
}
funcionInput(usuario, apellido, email);
