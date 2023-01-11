import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { BodyComponentComponent } from './components/body-component/body-component.component';
import { BuscadorComponentComponent } from './components/body-component/buscador-component/buscador-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { RedesSocialesComponentComponent } from './components/footer-component/redes-sociales-component/redes-sociales-component.component';
import { LegalPagesComponentComponent } from './components/footer-component/legal-pages-component/legal-pages-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BodyComponentComponent,
    BuscadorComponentComponent,
    FooterComponentComponent,
    RedesSocialesComponentComponent,
    LegalPagesComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
