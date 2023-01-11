import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { AgendaformComponent } from './components/agendaform/agendaform.component';
import {HttpClientModule} from '@angular/common/http';
import { ContactosComponent } from './components/contactos/contactos.component'
import {FormsModule} from "@angular/forms"

const rutas:Routes =[
  {path:'home', component: HomeComponent},
  {path:'form', component: AgendaformComponent},
  {path:'contactos', component: ContactosComponent},
  {path:"**", pathMatch:'full', redirectTo:'home'}
]

@NgModule({
  declarations: [
    AppComponent,
    AgendaformComponent,
    ContactosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//EJEMPLO DE CREACION DE RUTAS