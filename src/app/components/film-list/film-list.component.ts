import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../services/result.service';
import { FilmResult } from '../../classes/film-result';
import { OverlayService } from '../../services/overlay.service';

import { Search } from '../../classes/search';

import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-film-list',
    templateUrl: './film-list.component.html',
    styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
    public films: FilmResult[] = [];
    public params: Search = new Search();
    constructor(
        private resultService: ResultService,
        private overlayService: OverlayService
    ) {}
    ngOnInit() {
        this.resultService.get();
        Observable.interval(10000).subscribe((x) => {
            this.resultService.get();
        });
        this.resultService.results.subscribe((data) => {
            this.films = data;
        });
    }
    public view(index) {
        this.overlayService.set(this.films[index]);
    }
    public search() {
        this.resultService.get(this.params);
    }
}
