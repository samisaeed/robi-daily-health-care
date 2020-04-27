import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
    {
        path: 'signin', loadChildren: () => import('./pages/signin/signin.module')
            .then(m => m.SigninModule), data: { title: 'Signin' }
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

    ]
})
export class AuthenticationModule {
}