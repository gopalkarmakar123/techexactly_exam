import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = "https://navkiraninfotech.com/test_api/index.php";
  public token : string = "";
  constructor(private _http: HttpClient) { }
  callAuthApi(data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this._http.post<any>(`${this.apiUrl}`, data, { headers });

  }
}
