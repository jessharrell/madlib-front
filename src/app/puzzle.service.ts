import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class DisplayPuzzle {
  Title: string;
}

class IncomingPuzzle {
  title: string;
}

export interface IPuzzleService {
  GetAll(): Observable<DisplayPuzzle[]>;
}

@Injectable({
  providedIn: 'root'
})
export class PuzzleService implements IPuzzleService {

  constructor(private http: HttpClient) { }

  GetAll(): Observable<DisplayPuzzle[]> {
    return this.http.get<IncomingPuzzle[]>('https://localhost:5001/puzzle/all').pipe(
      map(data =>
        data.map(dataPuzzle => {
          const display = new DisplayPuzzle();
          display.Title = dataPuzzle.title;
          return display;
        })
      )
    );
  }

  CreatePuzzle(puzzle: DisplayPuzzle): Observable<boolean> {
    const dataPuzzle = new IncomingPuzzle();
    dataPuzzle.title = puzzle.Title;

    return this.http.post('https://localhost:5001/puzzle/create', dataPuzzle, {observe: 'response'})
      .pipe(map(resp => {
        return resp.status === 202;
      }));
  }
}
