import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { PlayPuzzleComponent } from './play-puzzle/play-puzzle.component';
import {HttpClientModule} from '@angular/common/http';
import { CreatePuzzleComponent } from './create-puzzle/create-puzzle.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    PlayPuzzleComponent,
    CreatePuzzleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
