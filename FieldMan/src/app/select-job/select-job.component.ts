import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Job } from '../BusinessModel/job';
import {JobService} from '../service/job.service';
import { Subscription } from 'rxjs/Subscription';
import { CrewConfigComponent } from '../crew-config/crew-config.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-select-job',
  templateUrl: './select-job.component.html',
  styles: [] ,
  providers: [NgbModal],
})
export class SelectJobComponent implements OnInit{  

  public CurrentJob:Job;
  subscription: Subscription;

  constructor(private jobService: JobService,private modalService: NgbModal) {
     
  }

  ngOnInit() {
    //Service Calls in Constructor - NOT GOOD 
    //TIME CONSUMING TASK are moved here
    this.CurrentJob=this.jobService.getCurrentJobObject();    
  }

  getCurrentJobId():string{
    return this.CurrentJob.jobId;
  }

  UpdateCurrentJob(newJob){
    this.CurrentJob=newJob;   
    this.jobService.setCurrentJob(newJob);
  }

  OpenCrewConfig(){    
    let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-adaptive modal-opened'};
    const modalRef = this.modalService.open(CrewConfigComponent,options);     
  }
}
