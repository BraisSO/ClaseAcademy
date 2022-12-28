import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import { Usuario } from '../models/Usuario';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL:string="http://localhost:8080/api/usuario"
  httpHeaders:HttpHeaders=new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http:HttpClient) {
  }
   
    //Listar los usuarios
    listarUsuarios():Observable<Usuario>{
      
      return this.http.get<Usuario>(this.URL+"/listDTO");

    }

    //Eliminar os usuarios
    eliminarUsuarios(id:number):Observable<Usuario>{
      return this.http.delete<Usuario>(this.URL+"/delete/"+id);
    }

    //Guardar Usuarios
    guardarUsuarios(usuario:Usuario): Observable<Usuario>{
        return this.http.post<Usuario>(this.URL+'/save',usuario,{headers:this.httpHeaders});
    }

    //Buscar Usuario
    buscarUsuario (id:number):Observable<Usuario>{
      return this.http.get<Usuario>(this.URL+"/"+id);
    }

    //Metodo para buscar por username
    buscarUsername(username:string):Observable<Usuario>{
      return this.http.get<Usuario>(this.URL+"/by-username/"+username);

    }
}
