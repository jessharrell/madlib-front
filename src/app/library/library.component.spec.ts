import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { LibraryComponent } from './library.component';
import {XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {DisplayPuzzle, IPuzzleService, PuzzleService} from '../puzzle.service';
import {defer, Observable, Observer} from 'rxjs';
import {Inject} from '@angular/core';

class GetAllObserver implements  Observer<DisplayPuzzle[]>{
  closed: boolean;
  complete: () => void;
  error: (err: any) => void;
  next: (value: DisplayPuzzle[]) => void;

}

class MockPuzzleService implements IPuzzleService
{
  GetAllReturn: DisplayPuzzle[];

  constructor(){
    this.GetAllReturn = [];
  }

  GetAll(): Observable<DisplayPuzzle[]> {
    return defer(() => [this.GetAllReturn]);
  }
}


describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async(() => {
    const mockPuzzleService = new MockPuzzleService();

    TestBed.configureTestingModule({
      declarations: [ LibraryComponent ],
      providers: [
        { provide: PuzzleService, useValue: mockPuzzleService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays Puzzles from puzzle.service', inject([PuzzleService], (mockService: MockPuzzleService) => {
    mockService.GetAllReturn = [ {Title: 'foo'}, {Title: 'bar'}];
    component.ngOnInit();
    expect(component.AllPuzzleCards.length).toBe(2);
    expect(component.AllPuzzleCards[0]).toBe('foo');
    expect(component.AllPuzzleCards[1]).toBe('bar');
  }));

});
