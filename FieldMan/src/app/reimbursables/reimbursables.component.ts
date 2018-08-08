import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModalOptions, NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NewReimbComponent } from '../new-reimb/new-reimb.component';
import { TimeNoteComponent } from '../time-note/time-note.component';

@Component({
  selector: 'app-reimbursables',
  templateUrl: './reimbursables.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reimbursables.component.css']
})
export class ReimbursablesComponent implements OnInit {

  EmployeeReimbursables=[];
  @Input() Areas;
  @Input() JobId:string;
  @Input() WorkDate;
  editing={};
  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) {
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
      },{
        "reimbursementItem":"Mileage",
        "employee":"Abc Pqr",
        "area":"",
        "units":"7.00",
        "um":"MILES",
        "costCode":"G-07",
        "Amount":"$3.78",
        "Hours":"3",
        "WorkDate":"08/01/2018"
      },{
        "reimbursementItem":"Mileage",
        "employee":"Abc Pqr",
        "area":"",
        "units":"7.00",
        "um":"MILES",
        "costCode":"G-07",
        "Amount":"$3.78",
        "Hours":"3",
        "WorkDate":"08/01/2018"
      },{
        "reimbursementItem":"Mileage",
        "employee":"Abc Pqr",
        "area":"",
        "units":"7.00",
        "um":"MILES",
        "costCode":"G-07",
        "Amount":"$3.78",
        "Hours":"3",
        "WorkDate":"08/01/2018"
      },{
        "reimbursementItem":"Mileage",
        "employee":"Abc Pqr",
        "area":"",
        "units":"7.00",
        "um":"MILES",
        "costCode":"G-07",
        "Amount":"$3.78",
        "Hours":"3",
        "WorkDate":"08/01/2018"
      },{
        "reimbursementItem":"Mileage",
        "employee":"Abc Pqr",
        "area":"",
        "units":"7.00",
        "um":"MILES",
        "costCode":"G-07",
        "Amount":"$3.78",
        "Hours":"3",
        "WorkDate":"08/01/2018"
      },{
        "reimbursementItem":"Mileage",
        "employee":"Abc Pqr",
        "area":"",
        "units":"7.00",
        "um":"MILES",
        "costCode":"G-07",
        "Amount":"$3.78",
        "Hours":"3",
        "WorkDate":"08/01/2018"
      },{
        "reimbursementItem":"Mileage",
        "employee":"Abc Pqr",
        "area":"",
        "units":"7.00",
        "um":"MILES",
        "costCode":"G-07",
        "Amount":"$3.78",
        "Hours":"3",
        "WorkDate":"08/01/2018"
      },{
        "reimbursementItem":"Mileage",
        "employee":"Abc Pqr",
        "area":"",
        "units":"7.00",
        "um":"MILES",
        "costCode":"G-07",
        "Amount":"$3.78",
        "Hours":"3",
        "WorkDate":"08/01/2018"
      },{
        "reimbursementItem":"Mileage",
        "employee":"Abc Pqr",
        "area":"",
        "units":"7.00",
        "um":"MILES",
        "costCode":"G-07",
        "Amount":"$3.78",
        "Hours":"3",
        "WorkDate":"08/01/2018"
      },{
        "reimbursementItem":"Mileage",
        "employee":"Abc Pqr",
        "area":"",
        "units":"7.00",
        "um":"MILES",
        "costCode":"G-07",
        "Amount":"$3.78",
        "Hours":"3",
        "WorkDate":"08/01/2018"
      },{
        "reimbursementItem":"Mileage",
        "employee":"Abc Pqr",
        "area":"",
        "units":"7.00",
        "um":"MILES",
        "costCode":"G-07",
        "Amount":"$3.78",
        "Hours":"3",
        "WorkDate":"08/01/2018"
      },{
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

  AddNewReimbursement(event,rowIndex){
    let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-adaptive modal-opened'};
    this.modalRef = this.modalService.open(NewReimbComponent,options);
    this.modalRef.componentInstance.Areas= this.Areas  
        
    if(rowIndex===undefined){
      this.modalRef.componentInstance.NewReimbEntry=[{
        "employee":"",
        "job":this.JobId,
        "area":"",
        "category":"L",
        "type":"REG",
        "trxDate":this.WorkDate
      }];
    }
    else{
    this.modalRef.componentInstance.NewReimbEntry=[{
      "employee":this.EmployeeReimbursables[rowIndex]["employee"],
      "job":this.JobId,
      "area":this.EmployeeReimbursables[rowIndex]["area"],
      "category":"L",
      "type":"REG",
      "trxDate":this.EmployeeReimbursables[rowIndex]["WorkDate"]
    }];
  }

    this.modalRef.componentInstance.NewReimbEntryAdded.subscribe(($e) => {
      this.SaveNewReimbEntry($e);
    })
  }


  SaveNewReimbEntry(NewReimbEntry){
    var NewReimb={
      "reimbursementItem":NewReimbEntry["reimbursementItem"],
      "employee":NewReimbEntry["employee"],
      "area":NewReimbEntry["area"],
      "units":NewReimbEntry["units"],
      "um":NewReimbEntry["um"],
      "costCode":"",
      "Amount":"$"+(NewReimbEntry["units"]*NewReimbEntry["unitRate"]),
      "Hours":NewReimbEntry["units"],
      "WorkDate":NewReimbEntry["WorkDate"]
    }
    this.EmployeeReimbursables.push(NewReimb);
    this.EmployeeReimbursables = [...this.EmployeeReimbursables]; 
    this.modalRef.close();
  }

  DeleteReimbursement(event,rowIndex){
    this.EmployeeReimbursables.splice(rowIndex,1);
    this.EmployeeReimbursables = [...this.EmployeeReimbursables];   

  }

  AddReimbNote(event,rowIndex){
  let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-adaptive modal-opened'};
    this.modalRef = this.modalService.open(TimeNoteComponent,options);    

    this.modalRef.componentInstance.Employee= this.EmployeeReimbursables[rowIndex]["employee"]
    this.modalRef.componentInstance.Job= this.JobId   
    this.modalRef.componentInstance.title= "Reimbursable Entry Note"  
    this.modalRef.componentInstance.Area=this.EmployeeReimbursables[rowIndex]["area"]
    this.modalRef.componentInstance.CostCode=this.EmployeeReimbursables[rowIndex]["costCode"]
  }
}
