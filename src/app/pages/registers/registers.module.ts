import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistersRoutingModule } from './registers-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterListComponent } from './register-list/register-list.component';
import { StepsModule } from 'primeng/steps';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [RegisterFormComponent, RegisterListComponent],
  imports: [
    CommonModule,
    RegistersRoutingModule,
    StepsModule,
    SharedModule,
    CardModule,
    TabMenuModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    CheckboxModule,
    InputSwitchModule,
    InputMaskModule,
    DropdownModule,
    ReactiveFormsModule,
    InputNumberModule,
    ConfirmDialogModule,
    DialogModule
  ],
  providers: [ConfirmationService],
})
export class RegistersModule {}
