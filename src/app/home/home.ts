import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  students: Student[] = [];

  constructor(private service: StudentService) {}

  ngOnInit(): void {
    this.students = this.service.getStudents();
  }
}