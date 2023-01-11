let cantidad:HTMLInputElement=document.querySelector("#cantidad")!;
let diametro:HTMLInputElement=document.querySelector("#diametro")!;
let peso:HTMLInputElement=document.querySelector("#peso")!;

let boton:HTMLButtonElement=document.querySelector("#boton")!;

interface Pieza{
    cantidad:number,
    diametro:number
    peso:number
}

let creadorPiezas=(cantidad:number, diametro:number, peso:number):object=>{
    const pieza:Pieza={
        cantidad:cantidad,
        diametro:diametro,
        peso:peso
    }

    return pieza;
}

boton.addEventListener("click",function(){
    console.log(creadorPiezas(parseInt(cantidad.value),parseInt(diametro.value),parseInt(peso.value)));
})

