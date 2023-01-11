"use strict";
class Vehiculo {
    constructor(matricula) {
        this.matricula = matricula;
    }
}
class Coche extends Vehiculo {
    constructor(marca, modelo, precio, matricula) {
        super(matricula);
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    addCar(marca, modelo, precio) {
        console.log(marca + modelo + precio);
    }
}
let coche1 = new Coche("Seat", "Ibiza", 16000, "563AB");
coche1.addCar(coche1.marca, coche1.modelo, coche1.precio);
let miRobot = {
    size: 19,
    message: "Hola",
    printMessage(message) {
        console.log(message);
    }
};
class Empleado {
    constructor() {
        this.nombre = "Pepe";
        this.edad = 90;
    }
}
let empleadoTallerUno = {
    sueldo: 200,
    codigoEmpleado: 89,
    plus: 200
};
