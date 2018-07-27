import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Job } from '../BusinessModel/job';
import {JobService} from '../service/job.service';
import { Subscription } from 'rxjs/Subscription';
import { CrewConfigComponent } from '../crew-config/crew-config.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    alert("1");
    let options: NgbModalOptions = {windowClass: 'modal-opened'};
    const modalRef = this.modalService.open(CrewConfigComponent);   
   alert("2");
    
  }
}
