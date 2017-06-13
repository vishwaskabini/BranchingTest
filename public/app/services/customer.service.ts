import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '../common/routes/http.client';
import { Router } from '@angular/router';

@Injectable()
export class CustomerService {

    constructor(public http: HttpClient, private router: Router) {
    }

    createCustomer(customerDetails): Observable<any> {
        let data = {
            "interfaceName": "Customer",
            "methodName": "insertData",
            "requestInfo":
            {
                "insertObject": customerDetails
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

    updateCustomer(customerDetails): Observable<any> {
        let data = {
            "interfaceName": "Customer",
            "methodName": "upateData",
            "requestInfo":
            {
                "updateObject": customerDetails
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

    getCustomer(customerID): Observable<any> {
        let data = {
            "interfaceName": "Customer",
            "methodName": "getData"
        }
        return this.http.post(data, "API")
            .map((response: Response) => {
                let responseData = response.json();
                if (responseData.status == 1000) {
                    return responseData.responseInfo.data.filter(x => x.id === parseInt(customerID));
                } else {
                    return responseData;
                }
            });
    }

    getcustomers(): Observable<any> {
        let data = {
            "interfaceName": "Customer",
            "methodName": "getData"
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

