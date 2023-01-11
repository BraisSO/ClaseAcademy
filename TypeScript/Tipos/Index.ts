//tipo de dato tupla (con valores fijos)
let usuarios: [number,string];
usuarios= [1,'Pepe'];



//tipo dato enum (sucesion de valores constantes)
enum rol {'ADMIN'='admin', 'USER'='user'}

let personas: {
    nombre:string,
    rol:rol
} = {
    nombre:'pepe',
    rol: rol.ADMIN
}

console.log(personas.rol);


//tipo de dato union (permitir que las variables puedan ser de tipos alternativos)
let individuo: number | string;

individuo=23;
individuo="pepe";
//individuo=true;


//tipo de dato any (acepta cualquier tipo de dato)
let coches: any[] = [23,"mazda", true];


//tipo de dato undefined -> cuando una variable no está inicializada
let numero:number;


//tipo de dato null
let boton= document.getElementById("btn");
console.log(boton);


//tipo de dato void (indicar que una funcion no tiene retorno)
function message(): void {
    console.log("Saludos...")
}
message();

function message2(): String {
    return ("Saludos...")
}



//variables de tipo literal (inventadas por el programador)

type browser = 'chrome' | 'firefox';

let persona: {
    nombre:string,
    navegador:browser
} = {
    nombre:"Pepe",
    navegador:"chrome"
}




