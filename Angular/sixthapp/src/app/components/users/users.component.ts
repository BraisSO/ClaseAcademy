import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any=[];
  usuario:any="";
  
  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      res => this.users=res);
      
    }
    
    imprimirUsuarios(){
    const lista:HTMLElement=document.querySelector("#lista")!;

      if(lista.style.display!="none"){
        lista.style.display="none"
      }

    else{
        lista.style.display="block"
      }

  }

}
