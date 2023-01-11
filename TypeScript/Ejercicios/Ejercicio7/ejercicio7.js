"use strict";
let sueldoBruto = Number(prompt("Introduce tu sueldo bruto: "));
let retencion = Number(prompt("Introduce el % de retencion: "));
function calculoSalario(sueldoBruto, retencion) {
    let salarioTotal = 0;
    retencion = retencion / 100;
    salarioTotal = sueldoBruto - (sueldoBruto * retencion);
    return salarioTotal;
}
document.write(String(calculoSalario(sueldoBruto, retencion)));
