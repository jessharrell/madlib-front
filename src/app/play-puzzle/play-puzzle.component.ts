import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-play-puzzle',
  templateUrl: './play-puzzle.component.html',
  styleUrls: ['./play-puzzle.component.less']
})
export class PlayPuzzleComponent implements OnInit {
  public puzzleTitle: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.puzzleTitle = params.puzzleToPlay;
      });
  }

}
