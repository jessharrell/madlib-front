import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class DisplayPuzzle {
  Title: string;
}

class DataPuzzle {
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
    return this.http.get<DataPuzzle[]>('https://localhost:5001/puzzle/all').pipe(
      map(data =>
        data.map(dataPuzzle => {
          const display = new DisplayPuzzle();
          display.Title = dataPuzzle.title;
          return display;
        })
      )
    );
  }
}
