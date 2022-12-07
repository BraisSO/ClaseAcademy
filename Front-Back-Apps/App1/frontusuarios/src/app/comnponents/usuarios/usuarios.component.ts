import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/api/usuarios").subscribe(
      res =>this.usuarios=res);
  }

  imprimir(){
   console.log( this.usuarios);
  }

}
