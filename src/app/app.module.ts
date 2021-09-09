import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';

import {PokemonCounterComponent} from './pokemon-counter/pokemon-counter.component';
import {CountUpModule} from "ngx-countup";
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MatListModule} from "@angular/material/list";
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    PokemonCounterComponent,
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CountUpModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
