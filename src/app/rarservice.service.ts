import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Rar } from './rar';
//import { Rar } from './rar';

@Injectable({
  providedIn: 'root'
})
export class RarserviceService {

  _url = 'http://localhost:3000/submitRar';

  constructor(private _http: HttpClient) { }

  submitRar(rar: Rar)
  {
    return this._http.post<any>(this._url, rar);
  }
}
