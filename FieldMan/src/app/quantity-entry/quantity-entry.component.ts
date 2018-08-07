import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-entry',
  templateUrl: './quantity-entry.component.html',
  styleUrls: ['./quantity-entry.component.css']
})
export class QuantityEntryComponent implements OnInit {

 Quantities=[];

  constructor() { 
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

}
