import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { CrewConfigComponent } from '../crew-config/crew-config.component';
import { DailyCrewTimeComponent } from '../daily-crew-time/daily-crew-time.component';


import { Job } from '../BusinessModel/job';

import { JobService } from '../service/job.service';
import { Area } from '../BusinessModel/area';
import { CostCode } from '../BusinessModel/costCode';
import { Crew } from '../BusinessModel/crew';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-field-time',
  templateUrl: './field-time.component.html',
  styles: [],
  providers: [NgbModal],
})
export class FieldTimeComponent implements OnInit {
  public CurrentJob:Job;
  subscription: Subscription;
  Areas=[];
  area:string;
  Divisions=[];
  division:string
  Crews=[];
  crew:string;
  SelectedDate: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  
  @ViewChild(DailyCrewTimeComponent) DailyCrewTime:DailyCrewTimeComponent;

  constructor(private jobService:JobService,private modalService: NgbModal) {
    this.CurrentJob= this.jobService.getCurrentJobObject();
    this.Areas=[
      new Area("Select",""),
      new Area(""," : Main Job"),
      new Area("P2","P2 : Masse Ave Portal")
    ];
    this.area="Select";

    this.Divisions=[
      new CostCode("","Select"),
      new CostCode("G","Div-G"),
      new CostCode("F","Div-F")
    ];

    this.division="";

    this.Crews=[
      new Crew("","Select",0,true),
      new Crew("01-1000.001","Crew1",8,true),
      new Crew("01-1000.002","Crew2",8,false),
      new Crew("01-1000.003","Crew3",8,true),
      new Crew("01-1000.004","Crew4",8,true)
    ];
    
    this.crew="";
  }

  ngOnInit() {
    
  } 

  ClearSelection():void{
    this.area="";
    this.division="";
  }

  PrevDate():void{   
    var cDate=new Date(this.SelectedDate.year,this.SelectedDate.month-1,this.SelectedDate.day);
    cDate.setDate(cDate.getDate()-1);
    this.formatDate(cDate);
  }

  nextDate():void{    
    var cDate=new Date(this.SelectedDate.year,this.SelectedDate.month-1,this.SelectedDate.day);
    cDate.setDate(cDate.getDate()+1);
    this.formatDate(cDate);
  }
  formatDate(cDate):void{
    this.SelectedDate = {year: cDate.getFullYear(), month: cDate.getMonth()+1, day: cDate.getDate()};
  }

  OpenCrewConfig():void{
    let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-adaptive modal-opened'};
    const modalRef = this.modalService.open(CrewConfigComponent,options);  
    modalRef.componentInstance.SelectedCrew= this.crew        
  }

  getCurrentJobId():string{
    return this.CurrentJob.jobId;
  }

  onCrewChange():void{
    this.DailyCrewTime.UpdateCrewTimeTab(this.crew);
  }

  onAreaChange():void{
    this.DailyCrewTime.FilterCrewTime(this.area,this.division);
  }
  getArea():string{
    return this.area;
  }

  

}
