import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { CrewConfigComponent } from '../crew-config/crew-config.component';
import { DialogService } from "ng2-bootstrap-modal";

import { Job } from '../BusinessModel/job';

import { JobService } from '../service/job.service';
import { Area } from '../BusinessModel/area';
import { CostCode } from '../BusinessModel/costCode';

@Component({
  selector: 'app-field-time',
  templateUrl: './field-time.component.html',
  styles: []
})
export class FieldTimeComponent implements OnInit {
  public CurrentJob:Job;
  subscription: Subscription;
  Areas=[];
  Divisions=[];

  constructor(private jobService:JobService) {
    this.CurrentJob= this.jobService.getCurrentJobObject();
    this.Areas=[
      new Area("","Select"),
      new Area(""," : Main Job"),
      new Area("P2","P2 : Masse Ave Portal")
    ];

    this.Divisions=[
      new CostCode("","Select"),
      new CostCode("G","Div-G"),
      new CostCode("F","Div-F")
    ];
  }

  ngOnInit() {
    
  }

}
