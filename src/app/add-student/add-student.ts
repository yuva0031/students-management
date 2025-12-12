import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-student.html',
  styleUrls: ['./add-student.css']
})
export class AddStudentComponent {

  studentForm!: FormGroup;

  classes = ['Class 6','Class 7','Class 8','Class 9'];
  subjects = ['Math','Science','English'];

  constructor(
    private fb: FormBuilder,
    private service: StudentService,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      className: ['', Validators.required],
      gender: ['', Validators.required],
      hasHobby: [false],
      hobby: [''],
      favouriteSubject: ['']
    });
  }

  get f() {
    return this.studentForm.controls as { [key: string]: any };
  }

  save() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const v = this.studentForm.value;

    this.service.addStudent({
      name: v['name'],
      className: v['className'],
      gender: v['gender'],
      hasHobby: v['hasHobby'],
      hobby: v['hasHobby'] ? v['hobby'] : undefined,
      favouriteSubject: v['favouriteSubject'] || undefined
    });

    this.router.navigate(['/']);
  }
}