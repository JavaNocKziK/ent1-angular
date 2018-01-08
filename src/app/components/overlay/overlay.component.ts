import { Component, OnInit } from '@angular/core';

import { FilmResult } from '../../classes/film-result';
import { ApiService } from '../../services/api.service';
import { ResultService } from '../../services/result.service';
import { OverlayService } from '../../services/overlay.service';

@Component({
    selector: 'app-overlay',
    templateUrl: './overlay.component.html',
    styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
    public data: FilmResult;
    constructor(
        private apiService: ApiService,
        private resultService: ResultService,
        private overlayService: OverlayService
    ) {}
    ngOnInit() {
        this.overlayService.get().subscribe((data) => {
            this.data = data;
        });
    }
    public close() {
        this.overlayService.set(undefined);
    }
    public delete(id: String) {
        this.apiService.delete(id).subscribe((result) => {
            if(result.success) {
                this.resultService.get();
                this.overlayService.close();
            } else {
                console.log(result.message);
            }
        });
    }
}
