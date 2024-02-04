import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';

const routes: Routes = [
  { 
    path:'',
    component:PatientComponent,
    
   },
];

export const PatientRoutes = RouterModule.forChild(routes);
