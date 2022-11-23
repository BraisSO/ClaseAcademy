import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  textoBoton = "Click";
  color = "green";


  pulsar() {
    if (this.textoBoton == "Click" && this.color == "green") {
      this.textoBoton = "Has hecho click";
      this.color = "red";
    }

    else {
      this.textoBoton = "Click";
      this.color = "green";
    }
  }

}
