import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { PatientRoutes } from './patient.routing';
import { NzCardModule } from 'ng-zorro-antd/card';
import { BasicElementsModule } from 'src/app/shared/basic-elements.module';
import { FormElementsModule } from 'src/app/shared/form-elements.module';

@NgModule({
  imports: [
    CommonModule,
    PatientRoutes,
    NzCardModule,
    BasicElementsModule,
    FormElementsModule
  ],
  declarations: [PatientComponent]
})
export class PatientModule { }
