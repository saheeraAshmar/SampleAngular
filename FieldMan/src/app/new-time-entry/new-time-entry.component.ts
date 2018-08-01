import { Component, OnInit ,ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {NgbModal, NgbActiveModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-time-entry',
  templateUrl: './new-time-entry.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./new-time-entry.component.css']
})
export class NewTimeEntryComponent implements OnInit {

  NewTimeEntry=[];
  Employees=[];
  editing = {};
  Crews=[];
  Areas=[];
  CostCodes=[];
  HRTypes=[];
  @Output()  NewTimeEntryAdded=new EventEmitter<any>();

  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) {
    
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

   UpdateNewTimeEntry(event, cell, rowIndex){
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    if(cell=="hours")
      this.NewTimeEntry[rowIndex][cell] = +event.target.value;
    else
      this.NewTimeEntry[rowIndex][cell] = event.target.value;
    this.NewTimeEntry = [...this.NewTimeEntry];
    console.log('UPDATED!', this.NewTimeEntry[rowIndex][cell]);  
   }

   SaveNewTimeEntry(){
    this.NewTimeEntryAdded.emit(this.NewTimeEntry[0]);
   }

  ngOnInit() {
  }

}
