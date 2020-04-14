import {CreatablePuzzlePage} from './creatable-puzzle.po';
import {LibraryPage} from './library.po';
import { v4 as uuid } from 'uuid';

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

  it('should return to library with new puzzle in list', () => {
    const puzzleId = uuid().toString();
    createPage.EnterPuzzleTitle(puzzleId);
    createPage.SubmitPuzzle();
    const newPuzzleCard = libraryPage.FindPuzzleCardWithTitle(puzzleId);
    expect(newPuzzleCard.isDisplayed()).toBe(true);
  });
})
