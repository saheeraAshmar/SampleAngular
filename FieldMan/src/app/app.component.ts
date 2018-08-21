import { Component, OnDestroy,OnInit } from '@angular/core';
import { Job } from './BusinessModel/job';
import {JobService} from './service/job.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import {  HttpClient} from '@angular/common/http';
import { AuthenticationService } from './Service/authentication.service';
import {LoadingIndicatorService} from './Service/LoadingIndicator.Service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JobService,AuthenticationService]
})
export class AppComponent implements OnInit,OnDestroy {
  title:string;
  version:string;
  CurrentJob:Job;
  subscription: Subscription;
  user:string;
  loading: boolean = false;
  entries: string[] = [];


  constructor(private jobService:JobService,
   private router: Router,
    public AuthenticationService: AuthenticationService,
    private http: HttpClient,
    private loadingIndicatorService: LoadingIndicatorService) {
  
    this.title= 'Field Reporting Manager';
   this.version ='1.0';
   this.CurrentJob=new Job('09-4856', 'VALLEY HS - PHASE 2 IMPRVMENTS','G VARON','S EVANS',true);
   this.jobService.setCurrentJob(this.CurrentJob);
   var UserObject=JSON.parse(localStorage.getItem('currentUser'))
   if(UserObject!=null){
      this.user=UserObject.lastName+', '+UserObject.firstName
   }

   // change isLoading status whenever notified
   loadingIndicatorService
   .onLoadingChanged
   .subscribe(isLoading => this.loading = isLoading);
   
  }  

  launchRequests() {
    // posts/0 will fail
    for (let i = 0; i < 10; i++) {
      this.http
        .get(`https://jsonplaceholder.typicode.com/posts/${i}`)
        .subscribe();
    }
    
  }

ngOnInit(){
  this.jobService.getCurrentJob().subscribe(job => { this.CurrentJob = job; });
}

 get UserAuthenticated():boolean{
    return localStorage.getItem('currentUser') !=null
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

Logout(){
  this.AuthenticationService.logout();
  this.router.navigate(['/login']);
}

 
  
}
