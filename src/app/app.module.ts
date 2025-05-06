import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardProdottoComponent } from './pagina-prodotti/card-prodotto/card-prodotto.component';

@NgModule({
  imports: [
    BrowserModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  declarations: [
    CardProdottoComponent
  ]
})
export class AppModule { }
