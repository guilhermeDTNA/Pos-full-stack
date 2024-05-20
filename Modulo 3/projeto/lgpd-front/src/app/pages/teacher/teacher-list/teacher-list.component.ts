import { Component, OnInit } from '@angular/core';

// adicionar imports shared service e teacher
import { SharedService } from 'src/app/shared/shared.service';
import { TeacherService } from '../teacher.service';

// formatação
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit { // implements OnInit e import oninit
  faPencil = faPencil;
  faTrash = faTrash;

  // atributos curso e professores
  courseLabel: Array<{ value: String, label: String }> = [];
  teachers: any[] = [];

  // adicionar construtor ANTES do onInit
  constructor(
    private teacherService: TeacherService,
    private sharedService: SharedService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.listTeachers();
    this.sharedService.getCourses().subscribe(course => this.courseLabel = course);
  }

  async listTeachers(): Promise<void> {
    this.teachers = await this.teacherService.get<any[]>({
      url: "http://localhost:3000/getAllTeachers",
      params: {

      }
    });
  }

  async delete(id: number): Promise<void>{
    if(confirm("Deseja deletar esse professor?")){
      await this.teacherService.delete<any>({
        url: `http://localhost:3000/deleteTeacher/${id}`,
        params: {}
      })

      await this.listTeachers();
    }
  }
  
  getLabelCourse(value: String): String | undefined {
    let course = this.courseLabel.find((course) => course.value == value)
    return course?.label;
  }

}