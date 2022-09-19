import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/dataServices/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dataservice : DataService, private router:Router) { }

  ngOnInit(): void {
  }

  Search(event:any){
    console.log(event.target.value)
    this.dataservice.outgoingData(event.target.value)
}
Logout() 
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }
}
