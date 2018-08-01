import { Component, OnInit, Input } from '@angular/core';
import {NgbDateStruct, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
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
  @Input() WorkDate

  private modalRef: NgbModalRef;

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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
    this.modalRef = this.modalService.open(NewTimeEntryComponent,options);
    console.log(this.EmployeeTimeEntries[rowIndex])
//alert(this.WorkDate)
    if(rowIndex===undefined){
      this.modalRef.componentInstance.NewTimeEntry=[{
          "employee":"",
            "job":this.JobId,
            "crew":"",
            "area":"",
            "costCode":"",
            "category":"L",
            "hrsType":"REG",
            "hours":"",
            "workDate":this.WorkDate
          }]
      }
    else{
      this.modalRef.componentInstance.NewTimeEntry=[{
          "employee":this.EmployeeTimeEntries[rowIndex]["employee"],
            "job":this.JobId,
            "crew":"",
            "area":this.EmployeeTimeEntries[rowIndex]["area"],
            "costCode":"",
            "category":"L",
            "hrsType":"REG",
            "hours":0,
            "workDate":this.EmployeeTimeEntries[rowIndex]["workDate"]
        }]
      }
      this.modalRef.componentInstance.Crews= this.Crews 
      this.modalRef.componentInstance.Areas= this.Areas   
      this.modalRef.componentInstance.CostCodes=this.CostCodes
      this.modalRef.componentInstance.HRTypes=this.HRTypes 
      this.modalRef.componentInstance.NewTimeEntryAdded.subscribe(($e) => {
      this.SaveNewTimeEntry($e);
    })
  }

  SaveNewTimeEntry(newTimeEntry){
    console.log(this.EmployeeTimeEntries[0]);
    console.log(newTimeEntry);
    this.EmployeeTimeEntries.push(newTimeEntry);
    this.EmployeeTimeEntries = [...this.EmployeeTimeEntries]; 
    this.modalRef.close();
  }

  AddTimeNote(event,rowIndex){
    let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-adaptive modal-opened'};
    this.modalRef = this.modalService.open(TimeNoteComponent,options);
    
    this.modalRef.componentInstance.Employee= this.EmployeeTimeEntries[rowIndex]["employee"]
    this.modalRef.componentInstance.Job= this.JobId   
    this.modalRef.componentInstance.Area=this.EmployeeTimeEntries[rowIndex]["area"]
    this.modalRef.componentInstance.CostCode=this.EmployeeTimeEntries[rowIndex]["costCode"]
  }

  AlertClicks(event){
    alert("clicked");
  }

  ngOnInit() {
  }

}
