import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reimbursables',
  templateUrl: './reimbursables.component.html',
  styleUrls: ['./reimbursables.component.css']
})
export class ReimbursablesComponent implements OnInit {

  EmployeeReimbursables=[];
  @Input() Areas;
  editing={};

  constructor() {
    this.EmployeeReimbursables=[
      {
        "reimbursementItem":"Mileage",
        "employee":"Abc Pqr",
        "area":"",
        "units":"7.00",
        "um":"MILES",
        "costCode":"G-07",
        "Amount":"$3.78",
        "Hours":"3",
        "WorkDate":"08/01/2018"
      }
    ]
   }

  ngOnInit() {
  }

}
