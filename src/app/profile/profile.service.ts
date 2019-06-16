import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PayLoad } from '../login/login.service';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

const httpOption = {
    headers : new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer {}'
    })
}
export interface payload {
    userName: string;
    firstName: string;
    lastName: string;
    postCode: number;
    city: string;
    email: string;
    state: string;
    sex: string;
    latitude: number;
    longitude: number;
    phone: string;
}

export interface transPayLoad{
    NumberOfShares: string;
    StockId: number;
    TransactionDate: string;
    TransactionFlag: string;
    TransactionId: number;
    CustomerId: number;

}
interface TokenResponse{
    token: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    token = '';

    constructor(private http: HttpClient) {}
    private saveToken(token: string): void {
        localStorage.setItem('userToken', token);
        this.token = token;
    }
    updateProfile(user: User): Observable<any> {
        const base = this.http.post('user/profile', user, httpOption);
        const request = base.pipe(
            map((data: TokenResponse) => {
              if (data.token) {
                  this.saveToken(data.token);
              }
            }, error => this.handleError(error))
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

