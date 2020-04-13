import { LibraryPage } from './library.po';
import {browser, by, logging} from 'protractor';
import {PlayablePuzzlePage} from './playable-puzzle.po';
import {ExpectedConditions as until} from 'protractor';

describe('workspace-project App', () => {
  let page: LibraryPage;

  beforeEach(() => {
    page = new LibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to the MadLibs Library');
  });

  it('should take user to detail when user selects puzzle', async () => {
    await page.navigateTo();
    const puzzleCard = page.GetPuzzleAtIndex(0);
    const puzzleTitle = puzzleCard.getText();

    puzzleCard.click();

    const navigatedTo = new PlayablePuzzlePage();
    expect(navigatedTo.getTitleText()).toEqual(puzzleTitle);
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
