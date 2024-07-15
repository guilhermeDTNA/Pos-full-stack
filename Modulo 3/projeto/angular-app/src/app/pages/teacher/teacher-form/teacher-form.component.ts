import { Component, OnInit } from '@angular/core';

//add esses imports
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
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
  isComplete: Boolean = false;

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
    this.isComplete = this.model.course_id != undefined && this.model.course_id != "";

    if (this.form.valid && this.isComplete) {
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
      await this.router.navigate(['/teachers']);
    } else{
      alert("Preencha os campos obrigatórios");
    }
    
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
    const table = e.target.closest('table');
    table.querySelectorAll('tbody tr').forEach((item: HTMLElement) => {
      item.classList.remove("active");
    });

    e.target.closest('tr').classList.add("active");
    const id = e.target.closest('tr').id.replace("course-", "");

    if(id && id != "")  
      this.model.course_id = id;
  }

  cancel(){
    window.location.href = document.referrer
  }
}