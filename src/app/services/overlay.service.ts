import { Injectable } from '@angular/core';

import { FilmResult } from '../classes/film-result';

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class OverlayService {
    public static MODE_VIEW = 0x00;
    public static MODE_CREATE = 0x01;

    private dataSource: BehaviorSubject<FilmResult> = new BehaviorSubject<FilmResult>(undefined);
    public data = this.dataSource.asObservable();
    private modeSource: BehaviorSubject<Number> = new BehaviorSubject<Number>(0);
    public mode = this.modeSource.asObservable();
    constructor() {}

    /**
     * Show the overlay in create mode.
     */
    public create() {
        this.modeSource.next(OverlayService.MODE_CREATE);
        this.dataSource.next(new FilmResult);
    }

    /**
     * Get the data of the overlay.
     */
    public get() {
        return this.data;
    }

    /**
     * Show the overlay in view/edit mode.
     * @param newdata The data you wish to display.
     */
    public set(newdata: FilmResult) {
        this.modeSource.next(OverlayService.MODE_VIEW);
        this.dataSource.next(newdata);
    }

    /**
     * Dispose of the data so the overlay will close.
     */
    public close() {
        this.set(undefined);
    }
}
