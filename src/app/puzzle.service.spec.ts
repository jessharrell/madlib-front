import { PuzzleService } from './puzzle.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PuzzleService', () => {
  let service: PuzzleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    })
    service = TestBed.inject(PuzzleService);
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return list of all puzzles', inject([ HttpTestingController], (httpMock: HttpTestingController) => {
    const allPuzzleResponse = [ {Title: 'One'}, {Title: 'Two'}];

    service.GetAll().subscribe(puzzles => {
      expect(puzzles.length).toBe(2);
      expect(puzzles[0].Title).toBe('One');
      expect(puzzles[1].Title).toBe('Two');
    });

    const req = httpMock.expectOne('https:localhost:5001/puzzle/all');
    expect(req.request.method).toEqual('GET');

    req.flush(allPuzzleResponse);
  }));
});
