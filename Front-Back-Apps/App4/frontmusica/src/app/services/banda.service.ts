import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import { Banda } from '../models/Banda';


@Injectable({
  providedIn: 'root'
})
export class BandaService {

  URL:string="http://localhost:8080/api"
  httpHeaders:HttpHeaders=new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http:HttpClient) { }


    buscarNombre(nombre:string):Observable<Banda>{
      return this.http.get<Banda>(this.URL+"/nombre/"+nombre);
    }

    guardarBanda(disco:Banda){
      return this.http.post<Banda>(this.URL+'/guardar-banda',disco,{headers:this.httpHeaders});
  
    }

    listarBandas(){
      return this.http.get(this.URL+"/listar-bandas");
    }

    eliminarBanda(id:number){
      return this.http.delete<Banda>(this.URL+'/eliminarBanda-'+id);
    }

    editarBanda(id:number, banda:Banda){
      return this.http.put<Banda>(this.URL+'/modificarBanda/'+id,banda,{headers:this.httpHeaders});
    }


}
