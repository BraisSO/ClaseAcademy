import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  username:string="";
  usuariosEncontrados:any="";

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }


  buscarUsuario(){
    this.usuarioService.buscarUsername(this.username).subscribe(res=>{

      this.usuariosEncontrados=res;

    });
  }
  

  realTimeBuscador(){
    this.usuarioService.buscarUsername(this.username).subscribe(res=>{

      this.usuariosEncontrados=res;

    });
  }



}
