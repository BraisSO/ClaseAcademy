import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  username:string="";
  aficiones:string="";

  constructor() { }

  ngOnInit(): void {
  }

  
  getForm():void{
   console.log(this.username);
   console.log(this.aficiones);
  }

}
