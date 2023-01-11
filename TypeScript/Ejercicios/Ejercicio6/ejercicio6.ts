
let usuario:string=String(prompt("Introduce tu usuario: "));
let apellido:string=String(prompt("Introduce tu apellido: "));
let email=String(prompt("Introduce tu email: "));


function funcionInput(usuario:string,apellido:string,email:string):void{
    document.write("<p>"+ usuario + " " + apellido  + " " +  email +"</p>")
}

funcionInput(usuario,apellido,email);

