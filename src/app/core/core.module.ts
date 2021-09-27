import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        FlexModule
    ],
    exports: [
        CommonModule,
        FlexModule
    ]
})
export class CoreModule {}
