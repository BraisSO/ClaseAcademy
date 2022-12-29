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

seleccion=0;
seleccionDisco=0;
bandas:any=[];
discos:any=[];

banda:Banda= new Banda();
disco:Disco= new Disco();

  constructor(private discoService:DiscoService, private bandaService:BandaService, private router:Router) { }

  ngOnInit(): void {
    this.listaBandas();
    this.listarDiscos();
  }

  listaBandas(){
    this.bandaService.listarBandas().subscribe(res=>{
      console.log(res)
      this.bandas=res;
    })
  }

  listarDiscos(){
    this.discoService.listarDiscos().subscribe(res=>{
      console.log(res);
      this.discos=res;
    })
  }

saveBanda(){
  this.bandaService.guardarBanda(this.banda).subscribe()
  
}

saveDisco(){
 this.disco.banda.id=(Number)(this.seleccion);
 this.discoService.guardarDisco(this.disco).subscribe(res=> console.log(res));
 
}

eliminarBanda(id:number){
  this.bandaService.eliminarBanda(id).subscribe(res=>{
    console.log(res)
  })
}

eliminarDisco(id:number){
  this.discoService.eliminarDisco(id).subscribe(res=>{
    console.log(res)
  })
}

editarBanda(id:number){
  this.bandaService.editarBanda(id, this.banda).subscribe(res=>{
    console.log(res);
  })
}

editarDisco(id:number){
  this.discoService.editarDisco(id, this.disco).subscribe(res=>{
    console.log(res);
  })
}

}
