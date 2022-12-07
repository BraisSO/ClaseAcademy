import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Empleado } from '../models/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  URL: string= "http://localhost:8080/api/empleado";

  private httpHeaders:HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }

  guardarEmpleado (empleado:Empleado) : Observable<Empleado> {
    return this.http.post<Empleado>(this.URL+'/save', empleado, {headers:this.httpHeaders});
  }
}
