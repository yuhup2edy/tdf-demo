import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Rar } from './rar';
//import 'rxjs/add/operator/catch';
import 'rxjs/operators/catchError';
//import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { catchError } from 'rxjs/operators/catchError';

//import { Rar } from './rar';

@Injectable({
  providedIn: 'root'
})
export class RarserviceService {


  _url = 'http://localhost:3000/submitRar';

  constructor(private _http: HttpClient) { }

  submitRar(rar: Rar)
  {
    return this._http.post<any>(this._url, rar)
                .pipe(catchError(this.errorHandler))
  }

  errorHandler(error : HttpErrorResponse)
  {
    return throwError(error);
  }
}
