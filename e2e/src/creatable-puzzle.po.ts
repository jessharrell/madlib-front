import {by, element, ElementFinder} from 'protractor';

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

  IsErrorPresent(): Promise<boolean> {
    return element(by.css('.error')).isPresent() as Promise<boolean>;
  }

  AddTextInput() {
    element(by.css('.add-text-button')).click();
  }

  GetTextInputAtIndex(index: number): ElementFinder {
    return element.all(by.css('.text-input')).get(index);
  }
}
