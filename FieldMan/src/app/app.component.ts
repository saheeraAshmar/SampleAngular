import { Component, OnDestroy,OnInit } from '@angular/core';
import { Job } from './BusinessModel/job';
import {JobService} from './service/job.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AuthenticationService } from './Service/authentication.service';

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


  constructor(private jobService:JobService,
   private router: Router,
    public AuthenticationService: AuthenticationService ) {
  
    this.title= 'Field Reporting Manager';
   this.version ='1.0';
   this.CurrentJob=new Job('09-4856', 'VALLEY HS - PHASE 2 IMPRVMENTS','G VARON','S EVANS',true);
   this.jobService.setCurrentJob(this.CurrentJob);
   var UserObject=JSON.parse(localStorage.getItem('currentUser'))
   if(UserObject!=null){
      this.user=UserObject.lastName+', '+UserObject.firstName
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
