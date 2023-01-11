import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  numero:number=0;

  aumentar():number{
    return this.numero++;
  }

}
