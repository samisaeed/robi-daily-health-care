import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../main/authentication/services/auth/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

    constructor(
        private _authService: AuthService,
        private _router: Router,
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenizedRequest = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this._authService.authInfo ? this._authService.authInfo.access_token : null}`
            }
        });
        // return next.handle(tokenizedRequest);

        if (req.url.includes('/login')) {
            return next.handle(req);
        } else {
            return next.handle(tokenizedRequest);

        }
    }
}
