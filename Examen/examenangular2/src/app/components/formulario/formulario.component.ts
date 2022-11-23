import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  table=false;

  nombre="";
  apellido="";
  edad=0;
  profesion="";


personas: {nombre:string,
  apellido:string,
  edad:number
  profesion:string

}[]=[];


envioFormulario(){
  this.table=true;
  this.personas.push({
    nombre:this.nombre,
    apellido:this.apellido,
    edad:this.edad,
    profesion:this.profesion
  })
}

eliminar(i:number){
   this.personas.splice(i,1);
}

}

