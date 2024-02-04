import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseWorkComponent } from './course-work.component';
import { BasicElementsModule } from 'src/app/shared/basic-elements.module';
import { FormElementsModule } from 'src/app/shared/form-elements.module';
import { CourseWorkRoutes } from './course-work.routing';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  imports: [
    CommonModule,
    CourseWorkRoutes,
    BasicElementsModule,
    FormElementsModule,
    NzCardModule
  ],
  declarations: [CourseWorkComponent]
})
export class CourseWorkModule { }
