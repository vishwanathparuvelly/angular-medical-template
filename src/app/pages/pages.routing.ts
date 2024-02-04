import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'patients',
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
      },
      {
        path: 'Course-Work',
        loadChildren: () => import('./course-work/course-work.module').then(m => m.CourseWorkModule)
      },
      {
        path:'',
        redirectTo:'patients',
        pathMatch:'prefix'
      }
    ]
  },
];

export const PagesRoutes = RouterModule.forChild(routes);
