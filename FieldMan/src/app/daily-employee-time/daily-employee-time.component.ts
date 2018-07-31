import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily-employee-time',
  templateUrl: './daily-employee-time.component.html',
  styleUrls: ['./daily-employee-time.component.css']
})
export class DailyEmployeeTimeComponent implements OnInit {
  
  EmployeeTimeEntries=[];
  @Input() Areas;
  @Input() CostCodes;
  @Input() HRTypes;
  editing = {};

  constructor() { 
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

  ngOnInit() {
  }

}
