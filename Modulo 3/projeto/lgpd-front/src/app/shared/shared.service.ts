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
  users: Array<{ id: String; first_name: String; }> = [];
  courses: Array<{id: String; name: String, }> = [];
  
  userLabel: Array<{value: String, label: String}> = []; 
  courseLabel: Array<{value: String, label: String}> = [];

  // acrescentar conversores
  async convertUserToOption(): Promise<any[]> {
    this.users.forEach((user: { id: String, first_name: String; }) => {
      let u = {
        value: user.id.toString(),
        label: user.first_name
      }
      this.userLabel.push(u);
    });
    return this.userLabel;
  }

  async convertCourseToOption(): Promise<any[]> {
    this.courses.forEach((course: { id: String, name: String; }) => {
      let c = {
        value: course.id.toString(),
        label: course.name
      }
      this.courseLabel.push(c);
    });
    return this.courseLabel;
  }

  http: any;

  getUsers(): Observable<any[]>{
    return this.http.get("http://localhost:3000/getAllUsers").pipe(
      map(x => {
        Object.values(x).map((_user) => {
          let u = {value: _user.id, label: _user.first_name}
          this.users.push(u);
        })

        console.log(x);
        console.log(this.users);
        return this.users;
      })
    )
  }

  getCourses(): Observable<any[]>{
    return this.http.get("http:localhost:3000/getAllCourses").pipe(
      map(x => {
        Object.values(x).map((_course) => {
          let c = {value: _course.id, label: _course.name}
          this.users.push(c);
        })
        console.log(x);
        console.log(this.courses);
        return this.courses;

        console.log(x);
        console.log(this.users);
        return this.users;
      })
    )
  }

  // completar construtor
  constructor(
    private userService: UserService,
    private courseService: CourseService
  ) { }
}