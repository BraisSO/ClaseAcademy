import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/Departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departamentoform',
  templateUrl: './departamentoform.component.html',
  styleUrls: ['./departamentoform.component.css']
})
export class DepartamentoformComponent implements OnInit {

  nombre: string = '';

  departamento: Departamento = new Departamento();

  constructor(private departamentoService: DepartamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.departamento.nombreDepartamento = this.nombre

    this.departamentoService.guardarDepartamento(this.departamento).subscribe(
      res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Departamento Guardado',
          showConfirmButton: false,
          timer: 1000
        })

        this.router.navigate(['/departamentos']);
      }
    )
  }

}
