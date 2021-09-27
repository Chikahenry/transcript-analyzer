import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../../core/core.module';
import AnalyzerComponent from './analyzer.component';
import { ROUTES } from './analyzer.routes';

@NgModule({
    declarations: [ AnalyzerComponent ],
    imports: [
        CoreModule,
        MatSelectModule,
        MatSliderModule,
        MatFormFieldModule,
        MatTableModule,
        MatTooltipModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule
    ]
})
export class AnalyzerModule {}
