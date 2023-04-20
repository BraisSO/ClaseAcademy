import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDashboard } from '../model/Dashboard';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  URL:string = "http://localhost:5000"

  constructor(private http:HttpClient) { }

getUsers():Observable<UserDashboard>{
  return this.http.get<UserDashboard>(this.URL+'/dashboard')
}


}
