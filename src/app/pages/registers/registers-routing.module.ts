import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterListComponent } from './register-list/register-list.component';

const routes: Routes = [
  { path: '', component: RegisterListComponent },
  { path: 'new', component: RegisterFormComponent },
  { path: ':id/edit', component: RegisterFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistersRoutingModule { }
