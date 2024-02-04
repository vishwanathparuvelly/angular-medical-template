import { Routes, RouterModule } from '@angular/router';
import { CourseWorkComponent } from './course-work.component';

const routes: Routes = [
  { 
    path:'',
    component:CourseWorkComponent
   },
];

export const CourseWorkRoutes = RouterModule.forChild(routes);
