import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import StudentsData from '../../students.json';

interface Student{
  id: Number,
  name: String,
  email: String,
  gender: String
}

@Component({
  selector: 'app-manipulando-json',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './manipulando-json.component.html',
  styleUrl: './manipulando-json.component.css'
})
export class ManipulandoJsonComponent implements OnInit {
  students: Student[] = StudentsData;

  ngOnInit(): void {
    console.log(this.students);
  }
}
