 const form:HTMLFormElement= document.querySelector("form")!;
 const max:HTMLInputElement=document.querySelector("#num1")!;
 const min:HTMLInputElement=document.querySelector("#num2")!;


 let aleatorio=(min:number, max:number):number=>{
    min=min-1;
    return Math.floor(Math.random()*(max-min)+min+1);
 }


 form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log(aleatorio(parseInt(min.value), parseInt(max.value)));
    
 })