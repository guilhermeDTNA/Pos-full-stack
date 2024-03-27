import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL: string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.BASE_URL + 'users');
  }

  addUser(user: any): Observable<User>{
    return this.http.post<User>(this.BASE_URL + 'users', user, httpOptions);
  } 

  editUser(user: any): Observable<User>{
    let url:string = this.BASE_URL + 'users/'+ user.id;
    return this.http.put<User>(url, user, httpOptions);
  }

  deleteUser(user: any): Observable<User>{
    let url:string = this.BASE_URL + 'users/'+ user.id;
    return this.http.delete<User>(url, httpOptions);
  }
}
