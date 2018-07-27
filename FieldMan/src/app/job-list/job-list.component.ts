import { Component, NgModule,Output, EventEmitter, Input } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Job } from '../BusinessModel/job';
import {JobService} from '../service/job.service';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styles: []
})
export class JobListComponent{
 jobs=[];
 @Output()  jobChanged;
 @Input() SelectedJobId:string;
 

 constructor(_jobService: JobService) {
  this.jobs = [
    new Job('05-5022', 'HIGHLANDS RESERVOIR REPLACEMEN','J KASELOW','T WARD',false ),
    new Job('09-4856', 'VALLEY HS - PHASE 2 IMPRVMENTS','G VARON','S EVANS',true ),
    new Job('11-4777', 'CANCELLED-BJH SHOENBERG MICROP','M GOUDSCHAAL','J BAKER',true ),
    new Job('09-5075', 'DIGNITY HEALTHCARE ST JOSEPH','C HUTCHINS','G MCCONNELL',false),
    new Job('09-4789', 'VC SUMMER UNITS 2&3 PUMP STATI','J SIMS','J FLORES',true),
  ];

 
  this.jobChanged = new EventEmitter<string>();  
 }

 onChangeJob(newJobId) {    
    console.log(newJobId);
    var newJob = this.jobs.find(x => x.jobId == newJobId);
    this.jobChanged.emit(newJob);    
 }

}
