import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadepartamentosComponent } from './components/listadepartamentos/listadepartamentos.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { DepartamentoformComponent } from './components/departamentoform/departamentoform.component'
import { FormsModule } from '@angular/forms';
import { FormempleadoComponent } from './components/formempleado/formempleado.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ListaempleadosComponent } from './components/listaempleados/listaempleados.component';

const rutas:Routes=[
  {path:'departamentos', component:ListadepartamentosComponent},
  {path:'departamentos/form', component:DepartamentoformComponent},
  {path:'empleado/form', component:FormempleadoComponent},
  {path:'empleados', component:ListaempleadosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListadepartamentosComponent,
    DepartamentoformComponent,
    FormempleadoComponent,
    NavegacionComponent,
    ListaempleadosComponent
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
