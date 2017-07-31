/* Router file */
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from 'app/component/student-component/student.component';
import { StudentListComponent } from "app/component/student-list/student-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  { path: 'studentList', component: StudentListComponent },
];

export const appRouting = RouterModule.forRoot(routes);