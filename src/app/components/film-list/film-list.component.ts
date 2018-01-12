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
        // Fetch new results every 20 seconds. So the list will update
        // on it's own and we don't have to refresh.
        Observable.interval(20000).subscribe((x) => {
            this.resultService.get(this.params);
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
    public create() {
        this.overlayService.create();
    }
}
