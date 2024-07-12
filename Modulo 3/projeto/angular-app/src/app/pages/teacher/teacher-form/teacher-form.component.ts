import { Component, OnInit } from '@angular/core';

//add esses imports
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
//import { SharedService } from 'src/app/shared/shared.service';
import { TeacherService } from '../teacher.service';
import { CourseService } from '../../course/course.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {
  teacher: any = {};
  form = new FormGroup({});
  model: any = {};
  courses: any[] = [];

  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          props: {
            label: 'Nome',
            placeholder: 'Nome do Professor',
            required: true,
          },
        }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService,
    private courseService: CourseService
  ) {

    this.route.queryParams.subscribe(async (params: any) => {
      if (params.id !== undefined && params.id !== null) {
        this.teacher = await this.teacherService.get<any>({
          url: `http://localhost:3000/teacher/${params.id}`,
          params: {

          }
        });
        this.model = this.teacher;
      } else {
        this.model = {}
      }

    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      if (this.model?.id !== undefined && this.model?.id !== null) {
        this.teacher = await this.teacherService.put<any>({
          url: `http://localhost:3000/updateTeacher/${this.model?.id}`,
          params: {

          },
          data: this.model
        });

      } else {
        delete this.model?.id;
        await this.teacherService.post<any>({
          url: `http://localhost:3000/addTeacher`,
          params: {

          },
          data: this.model
        })
      }

    }
    await this.router.navigate(['/teachers']);
  }


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

  courseSelect(e: any): void{
    this.model.course_id = e.target.closest('tr').id.replace("course-", "");
  }
}