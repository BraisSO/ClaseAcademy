
class Vehiculo{
    matricula:string;

    constructor(matricula:string){
        this.matricula=matricula;
    }
}


class Coche extends Vehiculo {
    marca:string;
    modelo:string;
    precio:number;

    constructor(marca:string, modelo:string, precio:number, matricula:string){
        super(matricula);
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
    }

    addCar(marca:string,modelo:string,precio:number):void{
        console.log(marca + modelo + precio);

    }

}


let coche1= new Coche("Seat", "Ibiza", 16000, "563AB");

coche1.addCar(coche1.marca,coche1.modelo,coche1.precio);


interface IRobot {
    size:number,
    message:string,
    printMessage(message:string):void;
}

let miRobot: IRobot = {
    size: 19,
    message: "Hola",
    printMessage(message:string):void{
        console.log(message);
    }
}

interface Persona {
    nombre:string, 
    edad:number;
}

class Empleado implements Persona{
    nombre: string="Pepe";
    edad:number=90;
}

interface IEmpleado{
    sueldo:number,
    codigoEmpleado:number;
}

interface IEmpleadoTaller extends IEmpleado{
    plus:number;
}

let empleadoTallerUno :IEmpleadoTaller = {
    sueldo:200,
    codigoEmpleado:89,
    plus:200
}