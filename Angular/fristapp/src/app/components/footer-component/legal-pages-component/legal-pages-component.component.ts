import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-pages-component',
  templateUrl: './legal-pages-component.component.html',
  styleUrls: ['./legal-pages-component.component.css']
})
export class LegalPagesComponentComponent implements OnInit {
  anho:number= 2022;
  nombreCompleto:string= "Brais Suárez Miguéns";
  lugar:string= "Santiago de Compostela";
  legal:string="Aviso legal";
  datos:string="Protección de datos";
  cookies:string="Política de cookies";

  constructor() { }

  ngOnInit(): void {
  }

}
