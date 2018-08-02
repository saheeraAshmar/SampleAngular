import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import {NgbModal, NgbActiveModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { Reimbursement } from '../BusinessModel/Reimbursement';

@Component({
  selector: 'app-new-reimb',
  templateUrl: './new-reimb.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./new-reimb.component.css']
})
export class NewReimbComponent implements OnInit {

  NewReimbEntry=[];
  Employees=[];
  editing = {};
  Areas=[];
  Reimbursables=[];

  @Output()  NewReimbEntryAdded=new EventEmitter<any>();

  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) {

    this.Reimbursables=[
      new Reimbursement("Living Allowance",75.0000,"DAY(s)"),
      new Reimbursement("Periodic Flights",0.0000,"LS") ,
      new Reimbursement("Mileage",0.5400,"MILES"),
      new Reimbursement("Travel Time",50.0000,"MILES"),
      new Reimbursement("Trucking",22.5000,"DAY(s)")
    ];

    

    this.Employees=[
      {
        employeeName:"",
        role:""
      },
      {
        employeeName:"Abc Psaqr",
        role:"Carpenter"
      },
      {
        employeeName:"Mnv,petg",
        role:"Labor"
      },
      {
        employeeName:"Abc PQR",
        role: "Assistant"
      },{
        employeeName:"Abc, Pqr",
        role:"Carpenter"
      },
      {
        employeeName:"Mnv,petg",
        role:"Labor"
      },
      {
        employeeName:"ujfdsd,Pdsd",
        role: "Assistant"
      },
      {
        employeeName:"Abc, Pqr",
        role:"Carpenter"
      },
      {
        employeeName:"Mnv,petg",
        role:"Labor"
      },
      {
        employeeName:"ujfdsd,Pdsd",
        role: "Assistant"
      },{
        employeeName:"Abc, Pqr",
        role:"Carpenter"
      },
      {
        employeeName:"Mnv,petg",
        role:"Labor"
      },
      {
        employeeName:"ujfdsd,Pdsd",
        role: "Assistant"
      },{
        employeeName:"Abc, Pqr",
        role:"Carpenter"
      },
      {
        employeeName:"Mnv,petg",
        role:"Labor"
      },
      {
        employeeName:"ujfdsd,Pdsd",
        role: "Assistant"
      }
    ]
   }

  ngOnInit() {
  }

  UpdateNewReimbEntry(event,cell,rowIndex){
    this.editing[rowIndex + '-' + cell] = false;
    if(cell=="units")
      this.NewReimbEntry[rowIndex][cell] = +event.target.value;
    else
      this.NewReimbEntry[rowIndex][cell] = event.target.value;

    if(cell=='reimbursementItem'){
      var reimb=this.Reimbursables.find(x=>x.Reimbursement==this.NewReimbEntry[rowIndex][cell])
      this.NewReimbEntry[rowIndex]["um"] = reimb.UM;
      this.NewReimbEntry[rowIndex]["unitRate"] = reimb.UnitRate;
    }

    this.NewReimbEntry = [...this.NewReimbEntry];
  }

  SaveNewReimbEntry(){
    this.NewReimbEntryAdded.emit(this.NewReimbEntry[0]);
  }

}
