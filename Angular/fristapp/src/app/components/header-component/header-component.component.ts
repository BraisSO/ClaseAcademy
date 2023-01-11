import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  casaChollo:String= "casachollo";
  comprarAlquilar:String= "Comprar | Alquilar";
  misAlertas:String= "Mis Alertas";
  favoritos:String= "Favoritos";
  publica:String="Publica";
  accede:String="Accede";

  constructor() { }

  ngOnInit(): void {
  }


}




