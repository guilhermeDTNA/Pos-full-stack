import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

interface Student{
  id: Number,
  name: String,
  email: String,
  phone: String,
  password: String
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
  students: Student[] = [];

  getStudentes(): void{
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(data => {
      this.students = data;
    })
  }
  

  ngOnInit(): void {
    //console.log(this.students);
    this.getStudentes();
  }
}
