import { Component, OnInit } from '@angular/core';
import {IPuzzleService, PuzzleService} from '../puzzle.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent implements OnInit {
  AllPuzzleCards: string[];

  constructor(private puzzleService: PuzzleService) { }

  ngOnInit(): void {
    this.puzzleService.GetAll().subscribe(puzzles =>
      this.AllPuzzleCards = puzzles.map(p => p.Title)
    );
  }
}
