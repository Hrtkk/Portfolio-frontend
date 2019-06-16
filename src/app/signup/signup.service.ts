import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import { getToken } from '@angular/router/src/utils/preactivation';


// const httpOptions = {
//     headers : new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${tokenParse}`
//     })
// };
interface TokenResponse {
  token: string;
}

export interface TokenPayLoad {
  _id: string;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}



export interface User {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class SignupService{
    configUrl = '/users/register';
    token = '';
    constructor(private http: HttpClient) {}

    private saveToken(token: string): void {
      localStorage.setItem('userToken', token);
      this.token = token;
    }
    registerUser(user: TokenPayLoad): Observable<any> {

      const base = this.http.post('http://localhost:5000/users/register', user);
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

   
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occured. Handle it accordingly.
            console.error('An error occured:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}`, +
                `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError(
            `Something bad happened, please try again later`
        );
    }
}
