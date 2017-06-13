import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '../common/routes/http.client';
import { Router } from '@angular/router';

@Injectable()
export class ServerConfigService {

    constructor(public http: HttpClient, private router: Router) {
    }

    createServerConfig(serverConfigDetails): Observable<any> {
        let data = {
            "interfaceName": "ServerConfig",
            "methodName": "insertData",
            "requestInfo":
            {
                "insertObject": serverConfigDetails
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

    updateServerConfig(serverConfigDetails): Observable<any> {
        let data = {
            "interfaceName": "ServerConfiguration",
            "methodName": "upateData",
            "requestInfo":
            {
                "updateObject": serverConfigDetails
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

    getServerConfigById(serverConfigID): Observable<any> {
        let data = {
            "interfaceName": "ServerConfiguration",
            "methodName": "getData",
            "requestInfo":
            {
                "id": serverConfigID, "customerId": null
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

    getserverConfigs(): Observable<any> {
        let data = {
            "interfaceName": "ServerConfiguration",
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

