import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '../common/routes/http.client';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    constructor(public http: HttpClient, private router: Router) {
    }

    createUser(userDetails): Observable<any> {
        let data = {
            "interfaceName": "User",
            "methodName": "insertData",
            "requestInfo":
            {
                "insertObject": userDetails
            }
        }

        return this.http.post(data, "API")
            .map((response: Response) => {
                let responseData = response.json();
                if (responseData.status == 1000) {
                    return true;
                } else {
                    return false;
                }
            });
    }

    updateUser(userDetails): Observable<any> {
        let data = {
            "interfaceName": "User",
            "methodName": "upateData",
            "requestInfo":
            {
                "updateObject": userDetails
            }
        }

        return this.http.post(data, "API")
            .map((response: Response) => {
                let responseData = response.json();
                if (responseData.status == 1000) {
                    return true;
                } else {
                    return false;
                }
            });
    }

    getUserById(userID): Observable<any> {
        let data = {
            "interfaceName": "User",
            "methodName": "getData",
            "requestInfo":
            {
                "id": userID, "customerId": null
            }
        }

        return this.http.post(data, "API")
            .map((response: Response) => {
                let responseData = response.json();
                if (responseData.status == 1000) {
                    return responseData.responseInfo.data;
                } else {
                    return responseData;
                }
            });
    }

    getusers(): Observable<any> {
        let data = {
            "interfaceName": "User",
            "methodName": "getData",
            "requestInfo": {}
        }
        return this.http.post(data, "API")
            .map((response: Response) => {
                let responseData = response.json();
                if (responseData.status == 1000) {
                    return responseData.responseInfo.data;
                } else {
                    this.router.navigate(['/Login']);
                }
            });
    }
}

