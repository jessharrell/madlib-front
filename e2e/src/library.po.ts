import {browser, by, element, ElementFinder} from 'protractor';

export class LibraryPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('.content .title')).getText() as Promise<string>;
  }

  GetPuzzleAtIndex(index: number): ElementFinder {
    return element.all(by.css('.puzzle-card')).get(index);
  }

  FindPuzzleCardWithTitle(puzzleTitle: any): ElementFinder {
    return element(by.cssContainingText('.puzzle-card', puzzleTitle));
  }

  GetAddPuzzleButton() {
    return element(by.css('.add-button'));
  }
}
