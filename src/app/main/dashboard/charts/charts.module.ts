import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgApexchartsModule} from 'ng-apexcharts';
import { AllchatsComponent } from './allchats.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
    declarations: [AllchatsComponent],
    exports: [
        AllchatsComponent
    ],
    imports: [
        CommonModule,
        NgApexchartsModule,
        MatCardModule
    ]
})
export class ChartsModule { }
