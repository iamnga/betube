import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { configs } from "../config";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  API_URL = {
    postAddUser: configs.domain + configs.apiRoutes.admin.user.postAddUser,
    getListUser:
      configs.domain +
      configs.apiRoutes.admin.user.getListUser +
      configs.groupID,
    getListUserPaginate:
      configs.domain +
      configs.apiRoutes.admin.user.getListUserPaginate +
      configs.groupID +
      configs.params.pageSetUp
  };

  responseType = "json";
  header = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private _http: HttpClient) {}

  postAddUser(userInfo: any, token: string): Observable<any> {
    let result = this._http.post(this.API_URL.postAddUser, userInfo, {
      headers: this.createHeaderWithAuth(token),
      responseType: "json"
    });
    return result;
  }

  getListUser(): Observable<any[]> {
    let result: any = this._http.get(this.API_URL.getListUser);
    return result;
  }

  getListUserPaginate(pageNumber: any): Observable<any> {
    let result: any = this._http.get(this.API_URL.getListUserPaginate + pageNumber);
    return result;
  }

  createHeaderWithAuth(token: string): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    });
  }
}
