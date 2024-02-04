import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutes } from './login.routing';
import { LoginComponent } from './login.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
    declarations: [LoginComponent],
    imports: [ CommonModule,LoginRoutes,
    NzCheckboxModule ],
    exports: [],
    providers: [],
})
export class LoginModule {}