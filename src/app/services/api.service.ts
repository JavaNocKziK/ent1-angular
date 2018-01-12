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

    /**
     * Send a GET request to the /films endpoint to get a list of films.
     * @param search Optional search parameters as a Search type.
     */
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

    /**
     * Send a GET request to the /films/:id endpoint to get film data.
     * @param id The ID of the film you want to get.
     */
    public get(id: String) {
        return this._http
            .get(`${environment.api}/films/${id}`)
            .map((result) => {
                return result.json();
            });
    }

    /**
     * Send a DELETE request to the /film/:id endpoint to delete a film.
     * @param id The ID of the file to delete.
     */
    public delete(id: String) {
        return this._http
            .delete(`${environment.api}/films/${id}`)
            .map((result) => {
                return result.json();
            });
    }

    /**
     * Send a PUT request to the /film/:id endpoint to update a film.
     * @param data The data you want to set it to.
     */
    public update(data: FilmResult) {
        return this._http
            .put(`${environment.api}/films/${data.id}`, data)
            .map((result) => {
                return result.json();
            });
    }

    /**
     * Send a POST request to the /film endpoint to create a film.
     * @param data The film data.
     */
    public create(data: FilmResult) {
        return this._http
            .post(`${environment.api}/films`, data)
            .map((result) => {
                return result.json();
            });
    }
}
