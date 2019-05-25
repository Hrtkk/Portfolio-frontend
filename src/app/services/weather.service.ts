import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  fetchData(): Observable<any> {
      const base = this.http.get('http://localhost:5000/users/data')
      const response = base.pipe(
          map(result => result)
      );
      return response;
  }
}
