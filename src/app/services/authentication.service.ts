import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user';

export interface UserDetails {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userName: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}
export interface TokenPayload{
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  uaerName: string;
  password: string;
}



@Injectable({ providedIn: 'root'})
export class AuthenticationService{
    // private currentUserSubject: BehaviorSubject<User>;
    // public currentUser: Observable<User>;
    //
    // constructor(private http: HttpClient) {
    //     this.currentUserSubject = new BehaviorSubject<User> (JSON.parse(localStorage.getItem('currentUser')));
    //     this.currentUser = this.currentUserSubject.asObservable();
    // }
    //
    // public get currentUserValue(): User {
    //     return this.currentUserSubject.value;
    // }
    //
    // login(username: string, password: string) {
    //     return this.http.post<any>(`https://localhost:5000/users/authenticate`, { username, password })
    //         .pipe(map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //                 this.currentUserSubject.next(user);
    //             }
    //
    //             return user;
    //         }));
    // }
    //
    // logout() {
    //     // remove user from local storage to log user out
    //     localStorage.removeItem('currentUser');
    //     this.currentUserSubject.next(null);
    // }
      private token: string;
      constructor(
        private http: HttpClient,
        private router: Router
      ) {}
      private saveToken(token: string): void {
        localStorage.setItem('userToken', token);
        this.token = token;
      }
      private getToken(): any {
        if (!this.token) {
          this.token = localStorage.getItem('userToken');
        }
        return this.token;
      }

      public getUserDetails(): any {
        const token = this.getToken()
        let payload
        if (token) {
          payload = token.split('.')[1];
          payload = window.atob(payload);
          return JSON.parse(payload);
        } else {
          return null;
        }
      }

      public isLoggedIn(): boolean {
        const user = this.getUserDetails();
        if (user) {
          return user.exp > Date.now() / 1000

        } else {
          return false;
        }
      }

      public register (user: TokenPayload): Observable<any> {
        const base = this.http.post('users/register', user);
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

      public login(user: TokenPayload): Observable<any> {
        const base = this.http.post('/user/login', user);
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

      public logout(): void {
        this.token = '';
        window.localStorage.removeItem(('userToken'));
        this.router.navigateByUrl('/');
      }

}
