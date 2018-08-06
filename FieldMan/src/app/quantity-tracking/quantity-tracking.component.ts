import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-tracking',
  templateUrl: './quantity-tracking.component.html',
  styleUrls: ['./quantity-tracking.component.css']
})
export class QuantityTrackingComponent implements OnInit {

  Qunatities=[];
  QtyWeekEndDates=[];
  Divisions=[];
  CostCodes=[];
  Areas=[];

  constructor() { 
    this.Qunatities=[
      {
        "CostCode":"G-02",
        "CostCodeDesc":"TRUCKING",
        "Area":"",
        "AreaDesc":"Main Job",
        "QtyBudget":100,
        "WTDQty":75,
        "JTDQty":91,
        "CompletedPerc":91,
        "LFBudget":"",
        "WTDLF":0,
        "JTDLF":0,
        "CompletedLFPerc":""
      },
      {
        "CostCode":"G-08",
        "CostCodeDesc":"TVL-F CREW",
        "Area":"P2",
        "AreaDesc":"Second St.Port",
        "QtyBudget":100,
        "WTDQty":0,
        "JTDQty":0,
        "CompletedPerc":0,
        "LFBudget":"",
        "WTDLF":0,
        "JTDLF":0,
        "CompletedLFPerc":""
      }
    ];
    this.QtyWeekEndDates=[];
  }


  ngOnInit() {
  }

}
