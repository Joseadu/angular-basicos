import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// COMPONENTES
import { AppComponent } from './app.component';

// MODULOS
import { HeroesModule } from './heroes/heroes.module';
import { ContadoresModule } from './contadores/contadores.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
