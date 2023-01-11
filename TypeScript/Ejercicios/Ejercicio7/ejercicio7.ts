let sueldoBruto:number=Number(prompt("Introduce tu sueldo bruto: "));
let retencion:number=Number(prompt("Introduce el % de retencion: "));


function calculoSalario(sueldoBruto:number, retencion:number):number{
let salarioTotal:number=0;
retencion=retencion/100;
salarioTotal=sueldoBruto-(sueldoBruto*retencion);

    return salarioTotal;
}

document.write(String(calculoSalario(sueldoBruto,retencion)));