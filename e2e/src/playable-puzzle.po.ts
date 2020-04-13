import {browser, by, element, ElementFinder} from 'protractor';

export class PlayablePuzzlePage {
  getTitleText(): Promise<string> {
    return element(by.css('.content .title')).getText() as Promise<string>;
  }
}
