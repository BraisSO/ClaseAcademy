import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redes-sociales-component',
  templateUrl: './redes-sociales-component.component.html',
  styleUrls: ['./redes-sociales-component.component.css']
})
export class RedesSocialesComponentComponent implements OnInit {
  casaChollo:String= "casachollo"
  
  constructor() { }

  ngOnInit(): void {
  }

}
