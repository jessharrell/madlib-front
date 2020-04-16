import { LibraryPage } from './library.po';
import {browser, logging} from 'protractor';
import {PlayablePuzzlePage} from './playable-puzzle.po';
import {PuzzleCard} from './puzzle-card.po';
import {CreatablePuzzlePage} from './creatable-puzzle.po';


describe('Library', () => {
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
    const puzzleCard = new PuzzleCard(page.GetPuzzleAtIndex(0));
    const puzzleTitle = puzzleCard.GetTitle();

    puzzleCard.Play();

    const navigatedTo = new PlayablePuzzlePage();
    expect(navigatedTo.getTitleText()).toEqual(puzzleTitle);
  });

  it('should take user to create page when user selects add', () => {
    page.navigateTo();
    const addButton = page.GetAddPuzzleButton();

    addButton.click();

    const navigatedTo = new CreatablePuzzlePage();
    expect(navigatedTo.getTitleText()).toEqual('Create a Puzzle');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
