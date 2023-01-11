import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data1:string='';
  data2:string='';
  data3:string='';

  constructor() { }

  ngOnInit(): void {
  }

  imprimirValores(){
   let escritor:HTMLDivElement= document.querySelector("#escritor")!;
    
   escritor.innerHTML+="<br>" +this.data1 + "<br>" + this.data2 +"<br>" + this.data3;

  }

}
