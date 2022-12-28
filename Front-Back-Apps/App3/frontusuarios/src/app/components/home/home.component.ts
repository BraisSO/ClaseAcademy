import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios:any=[];

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.list();
  }

  //Listar Usuarios
  list(){
    this.usuarioService.listarUsuarios().subscribe(
      res => {
        console.log(res);
        this.usuarios=res;
      }
    );
  }

  //Eliminar usuario
  delete(id:number){
    this.usuarioService.eliminarUsuarios(id).subscribe(
      res=>{
        console.log(res);
        this.list();
      }
    )
  }

 
}
