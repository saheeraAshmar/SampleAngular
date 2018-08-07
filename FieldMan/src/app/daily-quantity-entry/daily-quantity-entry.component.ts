import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-daily-quantity-entry',
  templateUrl: './daily-quantity-entry.component.html',
  styleUrls: ['./daily-quantity-entry.component.css']
})
export class DailyQuantityEntryComponent implements OnInit {

  DailyQuantity=[];
  editing={};
  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) { 
    this.DailyQuantity=[{
      "Unit":"EA",
      "Monday":8,
      "Tuesday":6,
      "Wednesday":0,
      "Thursday":0,
      "Friday":0,
      "Saturday":0,
      "Sunday":0,
      "PreviousTotal":8,
      "WTDTotal":0,
      "JTDTotal":8,
      "EPC":8
    }]
  }

  ngOnInit() {
  }

  UpdateDailyQuantity(event, cell, rowIndex){
    this.editing[rowIndex + '-' + cell] = false;
      this.DailyQuantity[rowIndex][cell] = +event.target.value;
     this.DailyQuantity = [...this.DailyQuantity];  
   }

   UpdateProductionQuantity(){
     this.activeModal.close();
   }

}
