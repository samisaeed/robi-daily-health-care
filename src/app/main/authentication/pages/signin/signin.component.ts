import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {FuseConfigService} from '@fuse/services/config.service';
import {fuseAnimations} from '@fuse/animations';
import {Router} from '@angular/router';
import {FuseNavigationService} from '../../../../../@fuse/components/navigation/navigation.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../../services/auth/auth.service';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class SigninComponent implements OnInit {
    loginForm: FormGroup;
    navigation: any;
    public _verifying: boolean;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     * @param _authService
     * @param _menuService
     * @param _fuseNavigationService
     * @param _snackBar
     * @param _router
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _authService: AuthService,
        private _fuseNavigationService: FuseNavigationService,
        private _snackBar: MatSnackBar,
        private _router: Router,
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', Validators.required]
        });
    }

    onFormSubmit({value: {email, password}}): void {
        this._verifying = true;
        const resource = {
            email: email,
            password: password,
            client_id: environment.client_id,
            client_secret: environment.client_secret,
            grant_type: environment.grant_type
            };
        this._authService.signIn( resource) .subscribe( response => {

            const payload = JSON.parse(atob(response.data.access_token.split('.')[1]));
            this._verifying = false;
            this._authService.setAuthInfoInLocalStorage(response.data.access_token, payload, response.data);
            console.log('route');
            this._router.navigateByUrl('/dashboard').then(r => r);
        } , error => {
            this.openSnackBar(error.statusText);
            this._verifying = false;
            this.loginForm.reset();
        });

    }

    openSnackBar(message): void {
        this._snackBar.open(message, 'close', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
        });
    }

}
