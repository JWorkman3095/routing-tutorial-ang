import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  bassUrl: string = "http://localhost:11743/api/users"

  constructor(private http: HttpClient) { }

  list(): Observable<any[]> {
    return this.http.get(`${this.bassUrl}`) as Observable<any[]>;
  }
}
