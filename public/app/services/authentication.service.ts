import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { HttpClient } from '../common/routes/http.client';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(public httpclient: HttpClient) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username, password): Observable<boolean> {
        let data = {
            "interfaceName": "Customer",
            "methodName": "login",
            "requestInfo":
            {
                "emailId": username,
                "devicePlatform": "Web",
                "version": "1.0",
                "applicationName": "Prototype"
            }
        }
        return this.httpclient.LoginPost(username, password, data)
            .map((response: Response) => {
                let token = response.json() && response.json().clientToken;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ email: username, token: token }));
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}