import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
//import { ApplicationConstants } from '../../constant/application.constant';


@Injectable()
export class HttpClient {

  url = "http://prototypeweb.pdvrdkmq3d.us-west-2.elasticbeanstalk.com/PrototypeWebServlet";

  constructor(private http: Http, private router: Router) {
  }

  //Creates authorization header for each request.
  createAuthorizationHeader(headers: Headers, authType: string, auth: string) {
    headers.append('content-type', 'application/json');
    headers.append('Authorization', auth);
    headers.append('AuthorizationType', authType);
  }

  createLoginAuth(username, password) {
    let encodedPassword = btoa(password);
    let encodedEmail = btoa(username + ":" + encodedPassword);
    return "Basic " + encodedEmail;
  }

  createAuth() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let encodedToken = btoa(currentUser.email + ":" + currentUser.token);
    return "Basic " + encodedToken;
  }

  //Call requested API with header appended for method GET and return response back.
  get(data, authType) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers, authType, this.createAuth());
    return this.http.get("/", {
      headers: headers
    }).map((response: Response) => {
      return response.json();
    });
  }

  //Call requested API with header appended for method POST and return response back.
  post(data, authType) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers, authType, this.createAuth());
    return this.http.post("/", data, {
      headers: headers
    });
  }

  //Call requested API with header appended for method PATCH and return response back.
  patch(data, authType) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers, "", this.createAuth());
    return this.http.patch("/", data, {
      headers: headers
    });
  }

  //Call requested API with header appended for method DELETE and return response back.
  delete(data, authType) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers, "", this.createAuth());
    return this.http.delete("/", {
      headers: headers
    });
  }

  //Call requested API with method POST and return response back.
  LoginPost(username, password, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers, "Login", this.createLoginAuth(username, password));
    return this.http.post("/", data, {
      headers: headers
    }).map((response: Response) => {
      return response;
    });
  }
}