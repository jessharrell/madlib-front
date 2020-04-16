import {browser, by, element, ElementFinder} from 'protractor';

export class PlayablePuzzlePage {
  getTitleText(): Promise<string> {
    return element(by.css('.content .title')).getText() as Promise<string>;
  }

  GetTextDisplayAtIndex(index: number): ElementFinder {
    return element.all(by.css('.text-display')).get(index);
  }
}
