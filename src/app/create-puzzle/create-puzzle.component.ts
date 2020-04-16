import { Component, OnInit } from '@angular/core';
import {DisplayPuzzle, PuzzleService} from '../puzzle.service';
import {Router} from '@angular/router';

export class TextComponent {
  public RawText: string;
}

@Component({
  selector: 'app-create-puzzle',
  templateUrl: './create-puzzle.component.html',
  styleUrls: ['./create-puzzle.component.less']
})
export class CreatePuzzleComponent implements OnInit {

  public puzzleTitle = '';
  public isValid = true;
  public puzzleComponents: TextComponent[];

  constructor(private puzzleService: PuzzleService,
              private router: Router) {
    this.puzzleComponents = [];
  }

  ngOnInit(): void {
  }

  createPuzzle() {
    if (this.puzzleTitle === ''){
      this.isValid = false;
    } else {
      const puzzle = new DisplayPuzzle();
      puzzle.Title = this.puzzleTitle;
      puzzle.Components = this.puzzleComponents;
      this.puzzleService.CreatePuzzle(puzzle).subscribe(success =>
        this.router.navigate(['/library'])
      );
    }
  }

  AddTextInput() {
    this.puzzleComponents.push(new TextComponent());
  }
}
