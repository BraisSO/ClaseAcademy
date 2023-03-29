import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RickyMortyComponent } from './components/ricky-morty/ricky-morty.component';
import { PostComponent } from './components/post/post.component';

const rutas: Routes = [
  { path:'', component: PostComponent },
  { path:'ricky-and-morty', component: RickyMortyComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    RickyMortyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    FormsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
