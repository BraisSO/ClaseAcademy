const boton:HTMLButtonElement= document.querySelector(".boton")!

let arrow=()=>{
    alert("El boton ha sido pulsado");
}

boton.addEventListener("click",function():void{
    arrow();
})