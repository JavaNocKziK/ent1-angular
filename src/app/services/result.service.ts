import { Injectable } from '@angular/core';

import { FilmResult } from '../classes/film-result';
import { Search } from '../classes/search';

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from '../services/api.service';

@Injectable()
export class ResultService {
    private resultsSource: BehaviorSubject<FilmResult[]> = new BehaviorSubject<FilmResult[]>(undefined);
    public results = this.resultsSource.asObservable();
    constructor(
        private apiService: ApiService
    ) {}
    public get(search?: Search) {
        this.apiService.list(search).subscribe((data) => {
            let newData: FilmResult[] = [];
            data.forEach((element) => {
                let newFilm = new FilmResult();
                newFilm.id = element._id;
                newFilm.title = element.title;
                newFilm.director = element.director;
                newFilm.year = element.year;
                newFilm.cast = element.cast;
                newFilm.review = element.review;
                newData.push(newFilm);
            });
            this.resultsSource.next(newData);
        });
    }
}
