import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from '../Model/Info';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getPetition():Observable<Info>{
    return this.http.get<Info>(this.URL);
  }

}
