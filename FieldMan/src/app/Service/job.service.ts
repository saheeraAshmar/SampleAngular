import { Job } from '../BusinessModel/job';
import { Injectable } from '../../../node_modules/@angular/core';
import { Subject, Observable }    from 'rxjs';

@Injectable()
export class JobService {

    private SelectedJob:Job
   
    // getCurrentJob():Job {
    //    return this.SelectedJob;
    // }
    // SetCurrentJob(job){        
    //     this.SelectedJob=job;
    //     this.CurrentJob=job;
    // }

    // getCurrentJobId():string{
    //    return this.SelectedJob.jobId
    // }

    private CurrentJob = new Subject<Job>();
    public Job:Observable<Job>;

    setCurrentJob(job: Job) {
      this.CurrentJob.next(job); 
      this.SelectedJob=job;    
    }

    getCurrentJobObject():Job{
        
        return this.SelectedJob;
    }

    getCurrentJob(): Observable<Job> {
        return this.CurrentJob.asObservable();
    }

   
    // alertJobId(job:Job):void{
    //     alert("display job Id :"+ job.jobId);
    // }
    // alertmsg(msg){
    //     alert(msg);
    // }
   
}