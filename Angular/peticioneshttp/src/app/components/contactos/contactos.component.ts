import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  contactos:any = [];
  contacto:string = "";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   this.http.get("http://localhost:8080/api/contacto/lista").subscribe(
    res => this.contactos=res);

  }

  getSelect(){
    console.log (this.contacto)
  }
  
}
