import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule} from '@fuse/components';

import {fuseConfig} from 'app/fuse-config';

import {AppComponent} from 'app/app.component';
import {LayoutModule} from 'app/layout/layout.module';
import {AuthGuard} from './shared/guard/auth.guard';
import {AuthService} from './main/authentication/services/auth/auth.service';
import {TokenInterceptorInterceptor} from './shared/interceptor/token-interceptor.interceptor';
import {NgApexchartsModule} from 'ng-apexcharts';
import {AgmCoreModule} from '@agm/core';


const appRoutes: Routes = [
    {
        path: '', loadChildren: () => import('./main/dashboard/dashboard.module')
            .then(m => m.DashboardModule),
        canActivate: [AuthGuard]

    },
    {
        path: 'dashboard', loadChildren: () => import('./main/dashboard/dashboard.module')
            .then(m => m.DashboardModule),
        canActivate: [AuthGuard]

    },
    {
        path: 'auth', loadChildren: () => import('./main/authentication/authentication.module')
            .then(m => m.AuthenticationModule), data: {title: 'Auth'}
    },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,

        // chart module
        NgApexchartsModule,

            // map
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAqY9mz3JTLpxDueorqh_1Kf71aukQh8l8'
        })
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorInterceptor,
            multi: true
        },
        AuthGuard
    ],
})
export class AppModule {
}
