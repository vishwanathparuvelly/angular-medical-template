import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@NgModule({
    declarations: [],
    imports: [CommonModule,
        NzInputModule,
        NzRadioModule,
        NzSelectModule,
        NzCheckboxModule,
        NzSwitchModule],
    exports: [
        NzInputModule,
        NzRadioModule,
        NzSelectModule,
        NzCheckboxModule,
        NzSwitchModule
    ],
    providers: [],
})
export class FormElementsModule { }