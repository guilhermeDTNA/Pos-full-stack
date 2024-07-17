import { Component, OnInit } from '@angular/core';

// adicionar imports shared service e course
import { CourseService } from '../course.service';

// formatação
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit { // implements OnInit e import oninit
   // adicionar construtor ANTES do onInit
   constructor(
    private courseService: CourseService,
    private authService: AuthService
  ) { }

  faPencil = faPencil;
  faTrash = faTrash;

  // atributos curso e professores
  courseLabel: Array<{ value: String, label: String }> = [];
  courses: any[] = [];

  public isLoggedIn = this.authService.getLoginStatus();

  async ngOnInit(): Promise<void> {
    await this.listCourses();
  }

  async listCourses(): Promise<void> {
    this.courses = await this.courseService.get<any[]>({
      url: "http://localhost:3000/getAllCourses",
      params: {

      }
    });
  }

  async delete(id: number): Promise<void>{
    if(confirm("Deseja deletar esse curso?")){
      await this.courseService.delete<any>({
        url: `http://localhost:3000/deleteCourse/${id}`,
        params: {}
      })

      await this.listCourses();
    }
  }

}