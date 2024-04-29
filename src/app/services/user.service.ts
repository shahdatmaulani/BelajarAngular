import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:4200/api/user'

  constructor(private http: HttpClient) { }

  user: User[] = [];

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user, {
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'json'
    });
  }

}
