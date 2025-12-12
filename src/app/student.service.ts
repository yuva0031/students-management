import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {

  private students: Student[] = [
    { name:'Yuva A', className:'Class 9', gender:'Male', hasHobby:true, hobby:'Drawing', favouriteSubject:'Math' },
    { name:'Balaji', className:'Class 9', gender:'Male', hasHobby:true, hobby:'Gaming', favouriteSubject:'English' }
  ];

  getStudents() { 
    return this.students; 
  }

  addStudent(s: Student) {
    this.students.push(s);
  }
}