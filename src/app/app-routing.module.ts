import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/reports/reports.module').then(component => component.ReportsModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./pages/reports/reports.module').then(component => component.ReportsModule)
  },
  {
    path: 'registers',
    loadChildren: () => import('./pages/registers/registers.module').then(component => component.RegistersModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
