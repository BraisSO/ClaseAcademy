const formulario:HTMLFormElement=document.querySelector("form")!;
const num1:HTMLInputElement=document.querySelector("#num1")!;
const num2:HTMLInputElement= document.querySelector("#num2")!;


const suma=(numero1:number, numero2:number):number=>{
    return numero1+numero2;
};



formulario.addEventListener("click", function(){
    alert(suma(parseInt(num1.value), parseInt(num2.value)));

})



