import { Injectable } from "@angular/core";
import  'rxjs/add/operator/map'
import { Http } from '@angular/http';

@Injectable()

export class GetMockService {
    constructor(
        public _http: Http
    ){}

    getMock(){
        return this._http.get('/assets/mock/mock.json').map(res => this.handleResponse(res));
    }

    handleResponse(res) {
        return res.json();
    }
}