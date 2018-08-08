import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DailyQuantityEntryComponent } from '../daily-quantity-entry/daily-quantity-entry.component';
import { NgbModalOptions, NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quantity-entry',
  templateUrl: './quantity-entry.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./quantity-entry.component.css'],
 
})
export class QuantityEntryComponent implements OnInit {
  private modalRef: NgbModalRef;
 Quantities=[];

  constructor(private modalService: NgbModal) { 
    this.Quantities=[
      {
        "CostCode":"G-02",
        "CostCodeDesc":"TRUCKING",
        "Area":"",
        "BudgetQuantity":100,
        "UM":"",
        "LW_CompletedPerc":"",
        "LW_Quantity":"",
        "LW_JTDQty":"",
        "Target":"",
        "CompletedPerc":"",
        "Quantity":"",
        "JTDQty":"",
        
      },
      {
        "CostCode":"G-08",
        "CostCodeDesc":"TVL-F CREW",
        "Area":"P2",
        "BudgetQuantity":100,
        "UM":"",
        "LW_CompletedPerc":"",
        "LW_Quantity":"",
        "LW_JTDQty":"",
        "Target":"",
        "CompletedPerc":"",
        "Quantity":"",
        "JTDQty":"",        
      }
    ]
  }

  ngOnInit() {
  }

  onActivateQuantity(event){
    if (event.type === 'dblclick' && event.column.prop=="Quantity") {      
      let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-adaptive modal-opened'};
      this.modalRef = this.modalService.open(DailyQuantityEntryComponent,options);
    }
  }

}
