import { Component, OnInit } from '@angular/core';
import {DisplayPuzzle, IPuzzleService, PuzzleService} from '../puzzle.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent implements OnInit {
  AllPuzzleCards: DisplayPuzzle[];

  constructor(private puzzleService: PuzzleService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.puzzleService.GetAll().subscribe(puzzles =>
      this.AllPuzzleCards = puzzles
    );
  }

  takeUserToPlay(puzzle: DisplayPuzzle) {
    const params = {puzzleToPlay: puzzle.Title, puzzleComponents: puzzle.Components.map(c => c.RawText)};
    this.router.navigate(['/play'], {queryParams: params});
  }

  takeUserToCreate() {
    this.router.navigate(['/create']);
  }
}
