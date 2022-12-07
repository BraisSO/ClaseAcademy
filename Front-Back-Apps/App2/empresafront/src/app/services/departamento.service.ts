import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Departamento } from '../models/Departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

URL:string = 'http://localhost:8080/api/departamento'

private httpHeaders:HttpHeaders = new HttpHeaders({'Content-Type':'application/json'})


  constructor(private http:HttpClient) { }

  //Lista de departamentos

  listaDepartamentos(){
    return this.http.get(this.URL+'/lista');
  }


  //Guardar departamentos
  guardarDepartamento(departamento:Departamento): Observable<Departamento>{
    return this.http.post<Departamento>(this.URL+'/save', departamento, {headers: this.httpHeaders});

  }


}
