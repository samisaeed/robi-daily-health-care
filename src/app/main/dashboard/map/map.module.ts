import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {RouterModule, Routes} from '@angular/router';
import {AgmCoreModule} from "@agm/core";

const routes: Routes = [
    {
        path: '',
        component: MapComponent
    }
];

@NgModule({
    declarations: [MapComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AgmCoreModule,

    ]
})
export class MapModule {
}
