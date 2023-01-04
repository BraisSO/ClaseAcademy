import { Component, OnInit } from '@angular/core';
import { BandaService } from 'src/app/services/banda.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  buscarNombre:string="";
  bandas:any=[]

  constructor(private bandaService:BandaService) { }

  ngOnInit(): void {
  }


  buscar(){
    this.bandaService.buscarNombre(this.buscarNombre).subscribe(res=>{
      console.log(res)
      this.bandas=res;
    });
  }

}
