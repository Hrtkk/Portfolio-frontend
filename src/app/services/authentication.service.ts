import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { HttpHeaders } from '@angular/common/http';
import { getToken } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from '../auth/auth.guard';
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
  access_token: string;
}
export interface TokenPayload{
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
}
export interface PayLoad {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root'})
export class AuthenticationService {
    
      private token: string;
      constructor(
        private http: HttpClient,
        private router: Router,
        // private authService: AuthGuard,
      ) {}
      private saveToken(token: string): void {
        localStorage.setItem('userToken', token);
        this.token = token;
        console.log(localStorage)
        console.log('saved user token')
      }

      public getToken(): any {
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

      public isLoggedIn(url: string): boolean {
        // console.log('user is requesting to login');
        const user = this.getUserDetails();
        console.log('requesting end point', user);
        if (user) {
          // this.router.navigate(['/home']);
          console.log('User exist', user)
          if (url === '/home'){
            console.log(url);
            return true;
          }
          this.router.navigate(['home']);
          return true;

        } else {
          // this.authService.redirectUrl = url;
          console.log('user does not exist')
          // Navigate to the login page with extras
          if(url === '/'){
            return true;
          }
          this.router.navigate(['/']);
          return false;
        }
      }

      public register(user: TokenPayload): Observable<any> {
        const base = this.http.post('http://localhost:5000/users/register', user);
        const request = base.pipe(
          map((data: TokenResponse) => {
            if (data.access_token) {
              this.saveToken(data.access_token);
            }
            return data;
          })
        );
        return request;
      }

      getProfileInfo(): Observable<any> {
        const tokenParse = this.getToken();
        // console.log(localStorage)
        const httpOptions = {
            headers : new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenParse}`
            })
        };
        const base = this.http.get('http://localhost:5000/users/profile', httpOptions);
        const request = base.pipe(
            map((data: any) => {
              // console.log(data);
              return data;
            })
          );
        return request;
      }

      public login(user: PayLoad): Observable<any> {
        const base = this.http.post('http://localhost:5000/users/login', user);
        // console.log(user)
        const request = base.pipe(
          map((data: TokenResponse) => {
            // console.log(data)
            if (data.access_token) {
              this.saveToken(data.access_token);
              this.router.navigate(['/home']);
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
        console.log('user loggout')
      }

      public getReturns() {
        const tokenParse = this.getToken();
        // console.log(localStorage)
        const httpOptions = {
            headers : new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenParse}`
            })
        };
        const base = this.http.get('http://localhost:5000/users/return', httpOptions);
        const request = base.pipe(
            map((data: any) => {
              console.log(data);
              return data;
            })
          );
        return request;
      }

      getSuggestion(numStk: number) {
        const tokenParse = this.getToken();
        const httpOptions = {
            headers : new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenParse}`

              })
        };
        const base = this.http.post('http://localhost:5000/users/suggestion',  {'stkNum': numStk}, httpOptions);
        const request = base.pipe(
            map((data: any) => {
              console.log(data);
              return data;
            })
          );
        return request;
      }

}