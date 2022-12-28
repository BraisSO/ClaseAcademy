import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  usuario:Usuario = new Usuario;

  constructor(private usuarioService:UsuarioService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.show();
  }

   //Encontrar usuario
   show(){
    this.activatedRoute.params.subscribe((params) =>{
      
      this.usuarioService.buscarUsuario(params['id']).subscribe(res=>{
        this.usuario=res;
      });      
    })
  }

  update(){

  }

}
