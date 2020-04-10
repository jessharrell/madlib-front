import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { PlayPuzzleComponent } from './play-puzzle/play-puzzle.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    PlayPuzzleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
