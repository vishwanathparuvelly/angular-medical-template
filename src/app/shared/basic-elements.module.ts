import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
    declarations: [],
    imports: [CommonModule,
        NzGridModule,
        NzTableModule,
        NzIconModule
    ],
    exports: [NzGridModule,
        NzTableModule,
        NzIconModule],
    providers: [],
})
export class BasicElementsModule { }