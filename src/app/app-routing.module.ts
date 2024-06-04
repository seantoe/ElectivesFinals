import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorLogComponent } from './visitor-log/visitor-log.component';
import { StudentViolationsComponent } from './student-violations/student-violations.component';

export const routes: Routes = [
  { path: 'visitor-log', component: VisitorLogComponent },
  { path: 'student-violations', component: StudentViolationsComponent },
  { path: '', redirectTo: '/visitor-log', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
