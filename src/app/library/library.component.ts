import { Component, OnInit } from '@angular/core';
import {IPuzzleService, PuzzleService} from '../puzzle.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent implements OnInit {
  AllPuzzleCards: string[];

  constructor(private puzzleService: PuzzleService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.puzzleService.GetAll().subscribe(puzzles =>
      this.AllPuzzleCards = puzzles.map(p => p.Title)
    );
  }

  takeUserToPlay(puzzle: string) {
    const params = {puzzleToPlay: puzzle};
    this.router.navigate(['/play'], {queryParams: params});
  }
}
