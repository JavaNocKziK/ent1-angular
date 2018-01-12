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
    public mode: Number; // 0 = View, 1 = Create
    constructor(
        private apiService: ApiService,
        private resultService: ResultService,
        private overlayService: OverlayService
    ) {}
    ngOnInit() {
        this.overlayService.get().subscribe((data) => {
            this.data = data;
        });
        this.overlayService.mode.subscribe((data) => {
            this.mode = data;
        });
    }
    public close() {
        this.overlayService.set(undefined);
    }
    public delete() {
        this.apiService.delete(this.data.id).subscribe((result) => {
            if(result.success) {
                this.resultService.get();
                this.overlayService.close();
            } else {
                console.log(result.message);
            }
        });
    }
    public update() {
        this.apiService.update(this.data).subscribe((result) => {
            if(result.success) {
                this.resultService.get();
                this.overlayService.close();
            } else {
                console.log(result.message);
            }
        });
    }
    public create() {
        this.apiService.create(this.data).subscribe((result) => {
            if(result.success) {
                this.resultService.get();
                this.overlayService.close();
            } else {
                console.log(result.message);
            }
        });
    }
}
