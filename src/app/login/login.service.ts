import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


export interface User {
    email: string;
    password: string;
}

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

interface TokenResponse {
  token: string;
}
export interface PayLoad {
  email: string;
  password: string;
}




@Injectable({
     providedIn: 'root'
})
export class LoginService {
  token = '';
    private saveToken(token: string): void {
      localStorage.setItem('userToken', token);
      this.token = token;
    }
    constructor(private http: HttpClient) {}

    Login(user: PayLoad): Observable<any> {
      const base = this.http.post('/users/login', user);
      const request = base.pipe(
        map((data: TokenResponse) => {
          if (data.token) {
            this.saveToken(data.token);
          }
          return data;
        })
      );
      return request;
    }

    private handleError(error: HttpErrorResponse){
        // A client-side or network erroroccured. Handle it accordingly
        if (error.error instanceof ErrorEvent) {
            console.error('');
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may conatin
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was ${error.error}`
            );
        }

        return throwError(
            `Something bad happened; please try again later`
        );
    }
}
