import { Injectable } from '@angular/core';
import { Http, HttpModule, URLSearchParams, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

import { FilmResult } from '../classes/film-result';
import { Search } from '../classes/search';

@Injectable()
export class ApiService {
    constructor(
        private _http: Http
    ) {}
    public list(search?: Search) {
        let params = new URLSearchParams();
        if(search !== undefined) {
            params.set('title', search.title);
        }
        return this._http
            .get(`${environment.api}/films`, { search: params })
            .map((result) => {
                return result.json();
            });
    }
    public get(id: String) {
        return this._http
            .get(`${environment.api}/films/${id}`)
            .map((result) => {
                return result.json();
            });
    }
    public delete(id: String) {
        return this._http
            .delete(`${environment.api}/films/${id}`)
            .map((result) => {
                return result.json();
            });
    }
    public update(data: FilmResult) {
        return this._http
            .put(`${environment.api}/films/${data.id}`, data)
            .map((result) => {
                return result.json();
            });
    }
    public create(data: FilmResult) {
        return this._http
            .post(`${environment.api}/films`, data)
            .map((result) => {
                return result.json();
            });
    }
}
