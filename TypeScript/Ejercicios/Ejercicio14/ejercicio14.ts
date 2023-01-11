    const formulario:HTMLFormElement=document.querySelector("form")!;
    const texto:HTMLInputElement=document.querySelector("#texto")!;
    const textContent:HTMLElement=document.querySelector("#textoImpreso")!;


    formulario.addEventListener("keyup", function(){
       textContent.innerHTML=texto.value;
    });