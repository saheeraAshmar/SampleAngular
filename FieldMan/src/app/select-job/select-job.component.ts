import { Component, OnInit } from '@angular/core';
import { Job } from '../BusinessModel/job';
import {JobService} from '../service/job.service';
import { Subscription } from 'rxjs/Subscription';
import { CrewConfigComponent } from '../crew-config/crew-config.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-select-job',
  templateUrl: './select-job.component.html',
  styles: [] 
})
export class SelectJobComponent implements OnInit{  

  public CurrentJob:Job;
  subscription: Subscription;

  constructor(private jobService: JobService,private dialogService:DialogService) {
    this.CurrentJob=this.jobService.getCurrentJobObject();     
  }

  ngOnInit() {
   // this.CurrentJob=this.jobService.getCurrentJobObject(); 
  }

  getCurrentJobId():string{
    return this.CurrentJob.jobId;
  }

  UpdateCurrentJob(newJob){
    this.CurrentJob=newJob;   
    this.jobService.setCurrentJob(newJob);
  }

  OpenCrewConfig(){
    let disposable = this.dialogService.addDialog(CrewConfigComponent)
      // .subscribe((isConfirmed)=>{
      //     //We get dialog result
      //     if(isConfirmed) {
      //         alert('accepted');
      //     }
      //     else {
      //         alert('declined');
      //     }
      // });
  }
}
