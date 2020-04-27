import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private readonly _baseUrl;

    constructor(private _http: HttpClient,
                private _router: Router) {
        this._baseUrl = environment.baseUrl;
    }

    signIn(resource): Observable<any> {
        return this._http.post<any>(`${this._baseUrl}login`, resource );
    }


    setAuthInfoInLocalStorage(accessToken, payload, response): void {
        localStorage.clear();
        localStorage.setItem('auth', JSON.stringify({
            access_token: accessToken,
            name: response.employee.name,
            email: response.email,
            organization_id: response.organization_id,
            loggedIn: true
        }));
    }

    get authInfo(): any {
        return JSON.parse(localStorage.getItem('auth'));
    }

    get loggedInStatus(): boolean {
        return this.authInfo && this.authInfo.loggedIn ? this.authInfo.loggedIn : false;
    }
}
