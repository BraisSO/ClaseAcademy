const form:HTMLFormElement= document.querySelector("form")!;
const username:HTMLInputElement=document.querySelector("#username")!;

function containsOnlyNumbers(str:string) {
    return /^\d+$/.test(str);
  }
  

const emptyFieldValidator=()=>{
    if(username.value==""){
        alert("El campo username es obligatorio")
    }}

   const notANumberValidator =()=>{
    if(containsOnlyNumbers(username.value)){
      alert("El campo username no puede ser un número");
    }

}


form.addEventListener("submit",function(){
    emptyFieldValidator();
    notANumberValidator();
})