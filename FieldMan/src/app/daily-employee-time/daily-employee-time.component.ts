import { Component, OnInit, Input } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NewTimeEntryComponent } from '../new-time-entry/new-time-entry.component';
import { TimeNoteComponent } from '../time-note/time-note.component';
import { query } from '../../../node_modules/@angular/core/src/render3/query';

@Component({
  selector: 'app-daily-employee-time',
  templateUrl: './daily-employee-time.component.html',
  styleUrls: ['./daily-employee-time.component.css'],
  providers: [NgbModal]
})
export class DailyEmployeeTimeComponent implements OnInit {
  
  EmployeeTimeEntries=[];
  @Input() Areas;
  @Input() CostCodes;
  @Input() HRTypes;
  @Input() Crews;
  @Input() JobId:string;

  editing = {};

  constructor(private modalService: NgbModal) { 
    this.EmployeeTimeEntries=[
      {
        "crew":"01-1000.001",
        "employee":"Abc PQR",
        "area":"",
        "costCode":"B-01",
        "category":"OC",
        "hours":5,
        "hrsType":"OT",
        "workDate":"7/31/2018"
      },
      {
        "crew":"01-1000.002",
        "employee":"Mnp wys",
        "area":"P2",
        "costCode":"G-07",
        "category":"L",
        "hours":8,
        "hrsType":"REG",
        "workDate":"7/31/2018"
      }
    ];
  }

  UpdateEmployeeTime(event, cell, rowIndex){
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    if(cell=="hours")
      this.EmployeeTimeEntries[rowIndex][cell] = +event.target.value;
    else
      this.EmployeeTimeEntries[rowIndex][cell] = event.target.value;
    this.EmployeeTimeEntries = [...this.EmployeeTimeEntries];
    console.log('UPDATED!', this.EmployeeTimeEntries[rowIndex][cell]);    
  }

  DeleteEmployeeTimeEntry(event,rowIndex){
    this.EmployeeTimeEntries.splice(rowIndex,1);
    this.EmployeeTimeEntries = [...this.EmployeeTimeEntries];       
  }

  AddNewTimeEntry(event,rowIndex){
    //alert(rowIndex);
    let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-adaptive modal-opened'};
    const modalRef = this.modalService.open(NewTimeEntryComponent,options);
    console.log(this.EmployeeTimeEntries[rowIndex])

    if(rowIndex===undefined){
        modalRef.componentInstance.NewTimeEntry=[{
          "employee":"Select",
            "job":this.JobId,
            "crew":"Select",
            "area":"Select",
            "costCode":"Select",
            "category":"L",
            "hrsType":"REG",
            "hours":0,
            "workDate":""
          }]
      }
    else{
        modalRef.componentInstance.NewTimeEntry=[{
          "employee":this.EmployeeTimeEntries[rowIndex]["employee"],
            "job":this.JobId,
            "crew":"Select",
            "area":this.EmployeeTimeEntries[rowIndex]["area"],
            "costCode":"Select",
            "category":"L",
            "hrsType":"REG",
            "hours":0,
            "workDate":this.EmployeeTimeEntries[rowIndex]["workDate"]
        }]
      }
    modalRef.componentInstance.Crews= this.Crews 
    modalRef.componentInstance.Areas= this.Areas   
    modalRef.componentInstance.CostCodes=this.CostCodes
    modalRef.componentInstance.HRTypes=this.HRTypes 
    modalRef.componentInstance.NewTimeEntryAdded.subscribe(($e) => {
      this.SaveNewTimeEntry($e);
    })
  }

  SaveNewTimeEntry(newTimeEntry){
    console.log(this.EmployeeTimeEntries[0]);
    console.log(newTimeEntry);
    this.EmployeeTimeEntries.push(newTimeEntry);
    this.EmployeeTimeEntries = [...this.EmployeeTimeEntries]; 
  }

  AddTimeNote(event,rowIndex){
    let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-adaptive modal-opened'};
    const modalRef = this.modalService.open(TimeNoteComponent,options);
    
    modalRef.componentInstance.Employee= this.EmployeeTimeEntries[rowIndex]["employee"]
    modalRef.componentInstance.Job= this.JobId   
    modalRef.componentInstance.Area=this.EmployeeTimeEntries[rowIndex]["area"]
    modalRef.componentInstance.CostCode=this.EmployeeTimeEntries[rowIndex]["costCode"]
  }

  ngOnInit() {
  }

}
