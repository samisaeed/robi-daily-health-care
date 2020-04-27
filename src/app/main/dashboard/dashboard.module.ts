import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ChartsModule} from './charts/charts.module';
import {NgApexchartsModule} from 'ng-apexcharts';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'corona-map',
        loadChildren: () => import('./map/map.module')
            .then(m => m.MapModule),
    },
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FlexModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        ChartsModule,
        NgApexchartsModule,
        ExtendedModule,



    ]
})
export class DashboardModule {
}
