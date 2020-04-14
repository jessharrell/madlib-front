import {by, element} from 'protractor';

export class CreatablePuzzlePage {
  constructor(){
  }

  getTitleText(): Promise<string>{
    return element(by.css('.content .title')).getText() as Promise<string>;
  }

  EnterPuzzleTitle(puzzleTitle: string) {
    element(by.css('.input.title')).sendKeys(puzzleTitle);
  }

  SubmitPuzzle() {
    element(by.css('.submit-button')).click();
  }
}
