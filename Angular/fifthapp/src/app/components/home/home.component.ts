import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  texto="";
  estilo="border 1px solid black"

  keyArriba(){
 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
