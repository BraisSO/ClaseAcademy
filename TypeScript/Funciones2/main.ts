
//FUNCIONES ANONIMAS
//Almacenar las funciones en variables
let message = function () {
    alert("test");
}

message();


//CONSTRUCTOR FUNCTION
let prueba = new Function('a', 'b', 'return a+b');

alert(prueba(4, 5));


//A TRAVÉS DE EVENTOS
let boton: HTMLButtonElement = document.querySelector('button')!;
let cajaTexto: HTMLInputElement = document.querySelector('#texto')!;

console.log(boton);

boton?.addEventListener('click', function () {
    alert('Has hecho click!')

})

cajaTexto.addEventListener('keyup', function () {
    console.log(cajaTexto.value);
});


//FUNCIONES AUTOEJECUTABLES
//El primer parentesis se puede sustituir por + o -
(function(){    
  alert('Testing...')  
}());




//CALLBACKS-----------------------------------//
//Es una funcion pasada como parámetro a otra.

function suma(num1:number,num2:number,cb:Function){
    cb();
    return num1+num2;
}

alert(suma(5,6, function(){
    alert('Ejecutando el callback');
}));

//Ejemplos con funciones predefinidas (temporizadores)

setTimeout(function(){
    console.log('Ejecutando la primera funcion')
}, 1000)

setTimeout(function(){
    console.log('Ejecutando la primera funcion')
}, 2000)

setInterval(function(){
    console.log('Ejecutando la primera funcion')
}, 3000)




//ARROW FUNCTIONS 
//sin parametros y sin retorno
const message2=()=>{
    console.log('Creando una arrow function')
}

message2();


//con parametros y sin retorno
const prueba2=(texto:string):void =>{
    console.log(texto);
}

prueba('texto...');


//con parametros y con retorno
const demo= (message:string):string=> {
    return message;
}

console.log(demo('Hola que tal!?'));



//const ejemplo=():string => 'hola'  -> Ejemplo de código reducido a lo mínimo cuando solo es una linea incluso obviando la palabra return.

//prevent default para la persistencia de los valores de un formulario