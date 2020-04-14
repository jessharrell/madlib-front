import {CreatablePuzzlePage} from './creatable-puzzle.po';
import {LibraryPage} from './library.po';
import { v4 as uuid } from 'uuid';
import {browser, logging} from 'protractor';

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

  it('should error when no title entered and user submits', () => {
    createPage.SubmitPuzzle();

    expect(createPage.IsErrorPresent()).toBe(true);
  });
});
