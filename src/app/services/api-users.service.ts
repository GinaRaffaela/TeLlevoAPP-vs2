import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUsers {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  apiURL = 'https://my-json-server.typicode.com/GinaRaffaela/api/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiURL + '/users/').pipe(
      retry(3)
    );
  }

  getUser(userId): Observable<any> {
    return this.http.get(this.apiURL + '/users/' + userId).pipe(
      retry(3)
    );
  }

  getCars(): Observable<any> {
    return this.http.get(this.apiURL + '/cars/').pipe(
      retry(3)
    );
  }

  getCar(carId): Observable<any> {
    return this.http.get(this.apiURL + '/cars/' + carId).pipe(
      retry(3)
    );
  }
}
