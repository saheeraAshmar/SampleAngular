import { Component, OnInit } from '@angular/core';
import { Job } from '../BusinessModel/job';
import { JobService } from '../service/job.service';
import {AuthenticationService} from '../Service/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  public CurrentJob:Job;
  

  constructor(private jobService:JobService, 
              private router: Router,
              private AuthenticationService: AuthenticationService ) {
    this.CurrentJob= this.jobService.getCurrentJobObject();
  }

  ngOnInit() {    
    
  }

}
