import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormularioComponent } from './components/formulario/formulario.component';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from "@angular/forms"

const rutas:Routes =[
  {path:'formulario', component: FormularioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
