import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-formempleado',
  templateUrl: './formempleado.component.html',
  styleUrls: ['./formempleado.component.css']
})
export class FormempleadoComponent implements OnInit {

  departamentos:any=[];
  nombre:string= "";
  apellidos:string="";
  opcion:number=0;

  empleado:Empleado= new Empleado();

  constructor(private departamentoService:DepartamentoService, private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.listaDepartamentos();
  }

  listaDepartamentos(){
    this.departamentoService.listaDepartamentos().subscribe(
      res => {
        console.log(res)
        this.departamentos=res;
      }
    );
  }

  save(){
    console.log(this.nombre)
    console.log(this.apellidos)
    console.log(this.opcion)

    this.empleado.nombre=this.nombre;
    this.empleado.apellidos=this.apellidos;
    this.empleado.departamento.id=Number(this.opcion);

    this.empleadoService.guardarEmpleado(this.empleado).subscribe();
  }




}
