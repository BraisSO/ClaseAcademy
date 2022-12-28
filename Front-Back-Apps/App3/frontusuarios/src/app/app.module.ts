import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './components/update/update.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes:Routes=[
  {path:'home', component:HomeComponent},
  {path:'form', component:FormularioComponent},
  {path:'update/:id', component:UpdateComponent},
  {path:'search', component:BuscadorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    UpdateComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
