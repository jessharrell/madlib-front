import {by, ElementFinder} from 'protractor';

export class PuzzleCard {
  constructor(private puzzleCardFinder: ElementFinder) {
  }

  GetTitle() {
    return this.puzzleCardFinder.element(by.css('.card-title')).getText();
  }

  Play() {
    this.puzzleCardFinder.element(by.css('.play-button')).click();
  }
}
