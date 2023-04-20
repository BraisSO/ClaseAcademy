import { Component, OnInit } from '@angular/core';
import { UserDashboard } from 'src/app/model/Dashboard';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDashboard: UserDashboard = new UserDashboard()

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.getDataFromDashboard()
  }

getDataFromDashboard(){
  this.dashboardService.getUsers().subscribe(
    res => {
      console.log(res)
      this.userDashboard=res
    }
  )
}

}
