import { Job } from '../BusinessModel/job';
import { Injectable } from '@angular/core';
import { Subject, Observable }    from 'rxjs';

@Injectable()
export class JobService {

    private SelectedJob:Job

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

}