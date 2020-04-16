import {CreatablePuzzlePage} from './creatable-puzzle.po';
import {LibraryPage} from './library.po';
import { v4 as uuid } from 'uuid';
import {browser, logging} from 'protractor';
import {PlayablePuzzlePage} from './playable-puzzle.po';
import {PuzzleCard} from './puzzle-card.po';

describe('Creating a puzzle', () => {
  let libraryPage: LibraryPage;
  let createPage: CreatablePuzzlePage;

  beforeEach(() => {
    libraryPage = new LibraryPage();
    libraryPage.navigateTo();
    const addButton = libraryPage.GetAddPuzzleButton();

    addButton.click();

    createPage = new CreatablePuzzlePage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should return to library with new puzzle in list', () => {
    const puzzleId = uuid().toString();
    createPage.EnterPuzzleTitle(puzzleId);
    createPage.SubmitPuzzle();
    const newPuzzleCard = libraryPage.FindPuzzleCardWithTitle(puzzleId);
    expect(newPuzzleCard.isDisplayed()).toBe(true);
  });

  it('should create puzzle and add text components', () => {
    const puzzleId = uuid().toString();
    createPage.EnterPuzzleTitle(puzzleId);

    createPage.AddTextInput();
    createPage.GetTextInputAtIndex(0).sendKeys('Hello');

    createPage.AddTextInput();
    createPage.GetTextInputAtIndex(1).sendKeys('World');

    createPage.SubmitPuzzle();

    const newPuzzleCard = new PuzzleCard(libraryPage.FindPuzzleCardWithTitle(puzzleId));
    newPuzzleCard.Play();

    const playPage = new PlayablePuzzlePage();
    expect(playPage.getTitleText()).toBe(puzzleId);

    expect(playPage.GetTextDisplayAtIndex(0).getText()).toBe('Hello');
    expect(playPage.GetTextDisplayAtIndex(1).getText()).toBe('World');
  });

  it('should error when no title entered and user submits', () => {
    createPage.SubmitPuzzle();

    expect(createPage.IsErrorPresent()).toBe(true);
  });
});
