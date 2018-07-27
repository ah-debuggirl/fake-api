import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';


const ROUTES: Routes = [
  {path: '', redirectTo:'/departments', pathMatch: 'full'},
  {path: 'departments', component: DepartmentsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
