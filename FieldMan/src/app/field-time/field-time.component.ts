import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { CrewConfigComponent } from '../crew-config/crew-config.component';
import { DailyCrewTimeComponent } from '../daily-crew-time/daily-crew-time.component';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Job } from '../BusinessModel/job';

import { JobService } from '../service/job.service';
import { Area } from '../BusinessModel/area';
import { CostCode } from '../BusinessModel/costCode';
import { Crew } from '../BusinessModel/crew';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { HrType } from '../BusinessModel/HRType';
import { ignoreElements } from '../../../node_modules/rxjs/operators';


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
  HRTypes=[];
  crew:string;  
  SelectedDate:Date
  maxDate:Date = new Date();
  nextDateDisabled=true;
  datePickerConfig: Partial<BsDatepickerConfig>;
  
  
  @ViewChild(DailyCrewTimeComponent) DailyCrewTime:DailyCrewTimeComponent;

  constructor(private jobService:JobService,private modalService: NgbModal) {
    this.CurrentJob= this.jobService.getCurrentJobObject();
    this.SelectedDate=new Date();
    this.datePickerConfig = Object.assign({}, 
        { containerClass: 'theme-dark-blue',
          showWeekNumbers: false
        });

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

    this.HRTypes=[
      new HrType("","Select"),
      new HrType("HOL","HOL"),
      new HrType("VAC","VAC"),
      new HrType("OT","OT"),
      new HrType("REG","REG")
    ];
    
    this.crew="";
  }

  ngOnInit() {
    
  } 

  ClearSelection():void{
    this.area="";
    this.division="";
  }
  onWorkDateChanged(value: Date){   
    if(value==null || value.toString()=="Invalid Date"){      
      this.SelectedDate=new Date();
    }
    else{
      this.SelectedDate=value;
   }
    this.DisableButtons();
  }

  DisableButtons(){
    if(this.SelectedDate.setHours(0,0,0,0)>=new Date().setHours(0,0,0,0)){
      this.nextDateDisabled=true;
    }
    else{
      this.nextDateDisabled=false;
    }
  }
   

  PrevDate():void{   
    this.SelectedDate = new Date(this.SelectedDate.setDate(this.SelectedDate.getDate()-1));
    this.DisableButtons()   
   
  }

  nextDate():void{     
    this.SelectedDate = new Date(this.SelectedDate.setDate(this.SelectedDate.getDate()+1));
    this.DisableButtons()  
  }

  // formatDate(cDate):void{
  //   this.SelectedDate = {year: cDate.getFullYear(), month: cDate.getMonth()+1, day: cDate.getDate()};
  // }

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

  getAreaList(){
    return this.Areas
  }
  getCostCodeList(){
    return [
      new CostCode("G-08","MIS"),
      new CostCode("G-09","SITE SB FAB"),
      new CostCode("X-01","DRIVE BEAMS"),
      new CostCode("T-11","SLEEVES"),
      new CostCode("S-04","LAGGING"),
    ];
    
  }

  getHRTypeList(){
    return this.HRTypes;
  }

  getCrewList(){
    return this.Crews
  }

  getWorkDate(){
    return this.SelectedDate;
    // var wDate=new Date(this.SelectedDate.year,this.SelectedDate.month-1,this.SelectedDate.day);
    // return (wDate.getMonth() + 1)  + '/' + wDate.getDate() + '/' +  wDate.getFullYear()
  }
  

}
