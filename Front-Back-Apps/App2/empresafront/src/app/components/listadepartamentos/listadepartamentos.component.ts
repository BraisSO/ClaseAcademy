import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-listadepartamentos',
  templateUrl: './listadepartamentos.component.html',
  styleUrls: ['./listadepartamentos.component.css']
})
export class ListadepartamentosComponent implements OnInit {

  departamentos: any = [];

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.departamentoService.listaDepartamentos().subscribe(
      res => {
        console.log(res)
        this.departamentos = res
      })
  }
}
