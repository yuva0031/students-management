import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AddStudentComponent } from './add-student/add-student';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-student', component: AddStudentComponent }
];
