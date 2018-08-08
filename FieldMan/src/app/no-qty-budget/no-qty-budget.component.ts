import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-qty-budget',
  templateUrl: './no-qty-budget.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./no-qty-budget.component.css']
})
export class NoQtyBudgetComponent implements OnInit {
  NoBudgetCostCodes=[]
  constructor() {
    this.NoBudgetCostCodes=[
      {"CostCode":"G-02","Area":"P2","CostCodeDesc":"LAGGING"},
      {"CostCode":"X-05","Area":"P4","CostCodeDesc":"DIGGING"},
      {"CostCode":"G-02","Area":"P2","CostCodeDesc":"LAGGING"},
      {"CostCode":"X-05","Area":"P4","CostCodeDesc":"DIGGING"},
      {"CostCode":"G-02","Area":"P2","CostCodeDesc":"LAGGING"},
      {"CostCode":"X-05","Area":"P4","CostCodeDesc":"DIGGING"},
      {"CostCode":"G-02","Area":"P2","CostCodeDesc":"LAGGING"},
      {"CostCode":"X-05","Area":"P4","CostCodeDesc":"DIGGING"},
      {"CostCode":"G-02","Area":"P2","CostCodeDesc":"LAGGING"},
      {"CostCode":"X-05","Area":"P4","CostCodeDesc":"DIGGING"},
      {"CostCode":"G-02","Area":"P2","CostCodeDesc":"LAGGING"},
      {"CostCode":"X-05","Area":"P4","CostCodeDesc":"DIGGING"},
      {"CostCode":"G-02","Area":"P2","CostCodeDesc":"LAGGING"},
      {"CostCode":"X-05","Area":"P4","CostCodeDesc":"DIGGING"},
      {"CostCode":"G-02","Area":"P2","CostCodeDesc":"LAGGING"},
      {"CostCode":"X-05","Area":"P4","CostCodeDesc":"DIGGING"},
      {"CostCode":"G-02","Area":"P2","CostCodeDesc":"LAGGING"},
      {"CostCode":"X-05","Area":"P4","CostCodeDesc":"DIGGING"},
      {"CostCode":"G-02","Area":"P2","CostCodeDesc":"LAGGING"},
      {"CostCode":"X-05","Area":"P4","CostCodeDesc":"DIGGING"},
    ]
   }

  ngOnInit() {
  }

}
