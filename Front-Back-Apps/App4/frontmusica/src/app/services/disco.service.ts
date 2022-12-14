import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Disco } from '../models/Disco';


@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  URL:string="http://localhost:8080/api"
  httpHeaders:HttpHeaders=new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http:HttpClient) { }


  guardarDisco(disco:Disco){
    return this.http.post<Disco>(this.URL+'/guardar-album',disco,{headers:this.httpHeaders});

  }

  listarDiscos(){
    return this.http.get<Disco>(this.URL+'/listar-albums');
  }

  
  eliminarDisco(id:number){
    return this.http.delete<Disco>(this.URL+'/eliminarAlbum-'+id);
  }

  editarDisco(id:number, disco:Disco){
    return this.http.put<Disco>(this.URL+'/modificarAlbum/'+id,disco,{headers:this.httpHeaders});
  }


}
