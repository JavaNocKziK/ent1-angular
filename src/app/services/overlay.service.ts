import { Injectable } from '@angular/core';

import { FilmResult } from '../classes/film-result';

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class OverlayService {
    private dataSource: BehaviorSubject<FilmResult> = new BehaviorSubject<FilmResult>(undefined);
    public data = this.dataSource.asObservable();
    constructor() {}
    public get() {
        return this.data;
    }
    public set(newdata: FilmResult) {
        this.dataSource.next(newdata);
    }
    public close() {
        this.set(undefined);
    }
}
