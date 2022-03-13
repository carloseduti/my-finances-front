import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportDashboardComponent } from './report-dashboard/report-dashboard.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    ReportDashboardComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ChartModule
  ]
})
export class ReportsModule { }
