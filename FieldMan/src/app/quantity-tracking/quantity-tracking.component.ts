import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductionTrackingComponent } from '../production-tracking/production-tracking.component';
import { NgbModalOptions, NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quantity-tracking',
  templateUrl: './quantity-tracking.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./quantity-tracking.component.css']
})
export class QuantityTrackingComponent implements OnInit {

  Quantities=[];
  QtyWeekEndDates=[];
  Divisions=[];
  CostCodes=[];
  Areas=[];
  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) { 
    this.Quantities=[
      {"CostCode":"G-02","CostCodeDesc":"TRUCKING","Area":"","AreaDesc":"Main Job",
        "QtyBudget":100,"WTDQty":75,"JTDQty":91,"CompletedPerc":91,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-08","CostCodeDesc":"TVL-F CREW","Area":"P2","AreaDesc":"Second St.Port",
        "QtyBudget":100,"WTDQty":0,"JTDQty":0,"CompletedPerc":0,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-02","CostCodeDesc":"TRUCKING","Area":"","AreaDesc":"Main Job",
        "QtyBudget":100,"WTDQty":75,"JTDQty":91,"CompletedPerc":91,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-08","CostCodeDesc":"TVL-F CREW","Area":"P2","AreaDesc":"Second St.Port",
        "QtyBudget":100,"WTDQty":0,"JTDQty":0,"CompletedPerc":0,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-02","CostCodeDesc":"TRUCKING","Area":"","AreaDesc":"Main Job",
        "QtyBudget":100,"WTDQty":75,"JTDQty":91,"CompletedPerc":91,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-08","CostCodeDesc":"TVL-F CREW","Area":"P2","AreaDesc":"Second St.Port",
        "QtyBudget":100,"WTDQty":0,"JTDQty":0,"CompletedPerc":0,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-02","CostCodeDesc":"TRUCKING","Area":"","AreaDesc":"Main Job",
        "QtyBudget":100,"WTDQty":75,"JTDQty":91,"CompletedPerc":91,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-08","CostCodeDesc":"TVL-F CREW","Area":"P2","AreaDesc":"Second St.Port",
        "QtyBudget":100,"WTDQty":0,"JTDQty":0,"CompletedPerc":0,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-02","CostCodeDesc":"TRUCKING","Area":"","AreaDesc":"Main Job",
        "QtyBudget":100,"WTDQty":75,"JTDQty":91,"CompletedPerc":91,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-08","CostCodeDesc":"TVL-F CREW","Area":"P2","AreaDesc":"Second St.Port",
        "QtyBudget":100,"WTDQty":0,"JTDQty":0,"CompletedPerc":0,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-02","CostCodeDesc":"TRUCKING","Area":"","AreaDesc":"Main Job",
        "QtyBudget":100,"WTDQty":75,"JTDQty":91,"CompletedPerc":91,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-08","CostCodeDesc":"TVL-F CREW","Area":"P2","AreaDesc":"Second St.Port",
        "QtyBudget":100,"WTDQty":0,"JTDQty":0,"CompletedPerc":0,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-02","CostCodeDesc":"TRUCKING","Area":"","AreaDesc":"Main Job",
        "QtyBudget":100,"WTDQty":75,"JTDQty":91,"CompletedPerc":91,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-08","CostCodeDesc":"TVL-F CREW","Area":"P2","AreaDesc":"Second St.Port",
        "QtyBudget":100,"WTDQty":0,"JTDQty":0,"CompletedPerc":0,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-02","CostCodeDesc":"TRUCKING","Area":"","AreaDesc":"Main Job",
        "QtyBudget":100,"WTDQty":75,"JTDQty":91,"CompletedPerc":91,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      },
      {"CostCode":"G-08","CostCodeDesc":"TVL-F CREW","Area":"P2","AreaDesc":"Second St.Port",
        "QtyBudget":100,"WTDQty":0,"JTDQty":0,"CompletedPerc":0,"LFBudget":"",
        "WTDLF":0,"JTDLF":0,"CompletedLFPerc":""
      }
    ];
    this.QtyWeekEndDates=[
      {
          "SIPWeekEndDate":"08/08/2018",
          "Finalized":"No"          
      },
      {
        "SIPWeekEndDate":"05/07/2017",
        "Finalized":"Yes"          
    }
    ];
  }


  ngOnInit() {
  }

  OpenProductionTracking(){
    let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-adaptive modal-opened'};
    this.modalRef = this.modalService.open(ProductionTrackingComponent,options);
  }

}
