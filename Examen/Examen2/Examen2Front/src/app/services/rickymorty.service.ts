import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personajes } from '../Model/Personajes';

@Injectable({
  providedIn: 'root'
})
export class RickymortyService {

  URL:string="https://rickandmortyapi.com/api/character";

  constructor(private http:HttpClient) { }


  getPetition():Observable<Personajes>{
    return this.http.get<Personajes>(this.URL);
  }
}
