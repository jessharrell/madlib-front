import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {TextComponent} from './create-puzzle/create-puzzle.component';

export class DisplayPuzzle {
  Title: string;
  Components: TextComponent[];
}

class TextData {
  index: number;
  text: string;
}

class DataPuzzle {
  title: string;
  texts: TextData[];
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
    return this.http.get<DataPuzzle[]>('https://localhost:5001/puzzle/all').pipe(
      map(data =>
        data.map(dataPuzzle => {
          const display = new DisplayPuzzle();
          display.Title = dataPuzzle.title;
          display.Components = dataPuzzle.texts.sort((a, b) => a.index - b.index).map((t) => ({RawText: t.text}));
          return display;
        })
      )
    );
  }

  CreatePuzzle(puzzle: DisplayPuzzle): Observable<boolean> {
    const dataPuzzle = new DataPuzzle();
    dataPuzzle.title = puzzle.Title;
    dataPuzzle.texts = puzzle.Components.map((component, i) => {
      return {index: i, text: component.RawText};
    });
    return this.http.post('https://localhost:5001/puzzle/create', dataPuzzle, {observe: 'response'})
      .pipe(map(resp => {
        return resp.status === 202;
      }));
  }
}
