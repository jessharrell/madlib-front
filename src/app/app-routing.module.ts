import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibraryComponent} from './library/library.component';
import {PlayPuzzleComponent} from './play-puzzle/play-puzzle.component';
import {CreatePuzzleComponent} from './create-puzzle/create-puzzle.component';


const routes: Routes = [
  { path: '', component: LibraryComponent, pathMatch: 'full' },
  { path: 'play', component: PlayPuzzleComponent },
  { path: 'create', component: CreatePuzzleComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
