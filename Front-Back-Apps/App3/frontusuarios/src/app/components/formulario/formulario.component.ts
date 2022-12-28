import { Component, OnInit } from '@angular/core';
import { ComplexUser } from 'src/app/models/ComplexUser';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario:ComplexUser= new ComplexUser;

  constructor(private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }

save(){
  this.usuarioService.guardarUsuarios(this.usuario).subscribe(
    res=>{
      console.log(res);
  
      Swal.fire(
        'Good job!',
        'Usuario registrado'
    )
      this.router.navigate(["/home"]);

    }    
  )
}

}
