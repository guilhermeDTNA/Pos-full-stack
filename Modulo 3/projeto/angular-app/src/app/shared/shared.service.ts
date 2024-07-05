import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { CourseService } from '../pages/course/course.service';
import { UserService } from '../pages/user/user.service';

// criar exports
export interface Params {
  [key: string]: any;
}


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // acrescentar estrutura para conversores
  //os valores de url e params vem do component
  users: Array<{value: String, label: String}> = []; 
  courses: Array<{value: String, label: String}> = [];

  getUsers(): Observable<any[]> {
        return this.http
            .get("http://localhost:3000/getAllUsers")
            .pipe(
                map(x => {
                    Object.values(x).map((_user) => {
                        let u = { value: _user.id, label: _user.first_name }
                        this.users.push(u);
                    })
                    console.log(x);
                    console.log(this.users);
                    return this.users;
                })
            );
    }

  getCourses(): Observable<any[]>{
    return this.http
    .get("http://localhost:3000/getAllCourses")
    .pipe(
      map(x => {
        Object.values(x).map((_course: any) => {
          let c = {value: _course.id, label: _course.name}
          this.users.push(c);
        })
        console.log(x);
        console.log(this.courses);
        return this.courses;
      })
    )
  }

  // completar construtor
  constructor(
    private http: HttpClient
  ) { }
}