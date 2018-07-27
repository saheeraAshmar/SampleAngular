import { Component, OnInit } from '@angular/core';
import { Job } from '../BusinessModel/job';
import { Subscription } from 'rxjs/Subscription';
import { JobService } from '../service/job.service';
import { Observable }    from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  public CurrentJob:Job;
  

  constructor(private jobService:JobService) {
    this.CurrentJob= this.jobService.getCurrentJobObject();
  }

  ngOnInit() {
   
  }

}
