import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-agendaform',
  templateUrl: './agendaform.component.html',
  styleUrls: ['./agendaform.component.css']
})
export class AgendaformComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getForm(){
    this.router.navigate(['/home']);
  }

  //EJEMPLO REDIRECCIÓN DE RUTAS

}
