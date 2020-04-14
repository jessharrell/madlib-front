import { Component, OnInit } from '@angular/core';
import {DisplayPuzzle, PuzzleService} from '../puzzle.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-puzzle',
  templateUrl: './create-puzzle.component.html',
  styleUrls: ['./create-puzzle.component.less']
})
export class CreatePuzzleComponent implements OnInit {

  public puzzleTitle: string = '';

  constructor(private puzzleService: PuzzleService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createPuzzle() {
    const puzzle = new DisplayPuzzle();
    puzzle.Title = this.puzzleTitle;
    this.puzzleService.CreatePuzzle(puzzle).subscribe(success =>
      this.router.navigate(['/library'])
    );
  }
}
