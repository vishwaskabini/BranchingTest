import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '../common/routes/http.client';
import { Router } from '@angular/router';

@Injectable()
export class ApplicationConfigService {

    constructor(public http: HttpClient, private router: Router) {
    }

    createApplicationConfig(applicationConfigDetails): Observable<any> {
        let data = {
            "interfaceName": "ApplicationConfig",
            "methodName": "insertData",
            "requestInfo":
            {
                "insertObject": applicationConfigDetails
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

    updateApplicationConfig(applicationConfigDetails): Observable<any> {
        let data = {
            "interfaceName": "ApplicationConfiguration",
            "methodName": "upateData",
            "requestInfo":
            {
                "updateObject": applicationConfigDetails
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

    getApplicationConfigById(applicationConfigID): Observable<any> {
        let data = {
            "interfaceName": "ApplicationConfiguration",
            "methodName": "getData",
            "requestInfo":
            {
                "id": applicationConfigID, "customerId": null
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

    getapplicationConfigs(): Observable<any> {
        let data = {
            "interfaceName": "ApplicationConfiguration",
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

