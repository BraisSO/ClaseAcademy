import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  alumnos:string[]=['Pepe','Martin','Jose Coronario','Manuel'];

  constructor() { }

  ngOnInit(): void {
  }

}
