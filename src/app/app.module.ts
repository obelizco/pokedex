import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/moleculas/header/header.component';
import { PokemonPresentComponent } from 'src/components/moleculas/pokemon-present/pokemon-present.component';
import { FooterPokemonsComponent } from 'src/components/moleculas/footer-pokemons/footer-pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonPresentComponent,
    FooterPokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
