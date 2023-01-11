import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html',
  styleUrls: ['./lista-component.component.css']
})
export class ListaComponentComponent implements OnInit {
    
  visible:boolean=false;

  empleados: {
   nombre:string,
   antiguedad:number,
   salario:number
 }[]=[{
   nombre:"Luis Pérez Lopez",
   antiguedad: 6,
   salario: 24000
 },
 {
   nombre:"María Gomez Hernandez",
   antiguedad: 6,
   salario:1999
 }]
 

 mostrarOcultar(){
  if(this.visible===true){
    this.visible=false;
  }
  else if(this.visible===false){
    this.visible=true;
  }

 }


  constructor() { 
  }

  ngOnInit(): void {
  }

  

}
