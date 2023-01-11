import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

const rutas:Routes=[
  {path:'list', component: ListComponent},
  {path:'form', component: FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

