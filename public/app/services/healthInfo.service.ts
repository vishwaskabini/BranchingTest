import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '../common/routes/http.client';
import { Router } from '@angular/router';

@Injectable()
export class HealthInfoService {

    constructor(public http: HttpClient, private router: Router) {
    }

    createHealthInfo(healthInfoDetails): Observable<any> {
        let data = {
            "interfaceName": "HealthInfo",
            "methodName": "insertData",
            "requestInfo":
            {
                "insertObject": healthInfoDetails
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

    updateHealthInfo(healthInfoDetails): Observable<any> {
        let data = {
            "interfaceName": "HealthInfo",
            "methodName": "upateData",
            "requestInfo":
            {
                "updateObject": healthInfoDetails
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

    getHealthInfoById(healthInfoID): Observable<any> {
        let data = {
            "interfaceName": "CustomerHealthInfo",
            "methodName": "getData",
            "requestInfo":
            {
                "id": healthInfoID, "customerId": null
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

    gethealthInfosByCustomerId(customerID): Observable<any> {
        let data = {
            "interfaceName": "CustomerHealthInfo",
            "methodName": "getData",
            "requestInfo":
            {
                "id": null, "customerId": customerID
            }
        }
        return this.http.post(data, "API")
            .map((response: Response) => {
                let responseData = response.json();
                if (responseData.status == 1000) {
                    return responseData.responseInfo.data;
                } else {
                    return responseData.message;
                }
            });
    }

    gethealthInfos(): Observable<any> {
        let data = {
            "interfaceName": "CustomerHealthInfo",
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

