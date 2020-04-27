import {SigninComponent} from './signin.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {FuseSharedModule} from '../../../../../@fuse/shared.module';
import {MatSnackBar} from '@angular/material/snack-bar';

const routes: Routes = [
    {
        path: '',
        component: SigninComponent
    }
];

@NgModule({
    declarations: [SigninComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FlexModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        FuseSharedModule,
    ],
    providers: [
        MatSnackBar
    ]
})
export class SigninModule {
}
