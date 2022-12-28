import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banda } from 'src/app/models/Banda';
import { Disco } from 'src/app/models/Disco';
import { BandaService } from 'src/app/services/banda.service';
import { DiscoService } from 'src/app/services/disco.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

nombreBanda="";
nombreDisco="";
ano=0;
seleccion=0;
bandas:any=[];

nuevaBanda:Banda= new Banda();
nuevoDisco:Disco= new Disco();

  constructor(private discoService:DiscoService, private bandaService:BandaService, private router:Router) { }

  ngOnInit(): void {
    this.listaBandas();
  }

  listaBandas(){
    this.bandaService.listarBandas().subscribe(res=>{
      console.log(res)
      this.bandas=res;
    })
  }

saveBanda(){
  this.nuevaBanda.nombre=this.nombreBanda;
  this.bandaService.guardarBanda(this.nuevaBanda).subscribe()
  
}

saveDisco(){
  this.nuevoDisco.nombre=this.nombreDisco;
  this.nuevoDisco.año=this.ano;
  this.nuevoDisco.banda.id=(Number)(this.seleccion);

 this.discoService.guardarDisco(this.nuevoDisco).subscribe(res=> console.log(res));
 
}

}
