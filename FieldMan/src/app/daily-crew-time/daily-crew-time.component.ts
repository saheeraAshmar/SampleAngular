import { Component, OnInit, Input, ViewEncapsulation, EventEmitter, ViewChild } from '@angular/core';
import { HrType } from '../BusinessModel/HRType';
import { Employee } from '../BusinessModel/employee';
import * as $ from 'jquery';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip';

@Component({
  selector: 'app-daily-crew-time',
  templateUrl: './daily-crew-time.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./daily-crew-time.component.css'],
})
export class DailyCrewTimeComponent implements OnInit {

  @Input() JobId: string;

  private _area: string
  @Input()
  set area(area: string) {
    this._area = area;
    this.UpdateCrewDailyTotals_Area();
  }

  @Input() HRTypes = [];

  editing = {};
  Invalid = {}
  errors = {};


  CrewTimeEntries_WithoutFilter = [];
  CrewTimeEntries = [];
  CrewMembers = [];
  CrewDailyTotal_Area = [];
  CrewDailyTotal = [];


  constructor() {

    this.CrewTimeEntries_WithoutFilter = [];
    this.CrewTimeEntries = [];
    this.CrewMembers = [];
    this.CrewDailyTotal_Area = [
      { "reg": 0, "ot": 0, "dt": 0, "other": 0 }
    ];

    this.CrewDailyTotal = [
      { "reg": 0, "ot": 0, "dt": 0, "other": 0 }
    ];

  }

  get area(): string {
    return this._area.toUpperCase();
  }

  VaidateEntry(event, cell, rowIndex, c) {
    if(cell=="otherType"){
      this.Invalid[rowIndex + '-' + cell] = !this.ValidTimeEntry(rowIndex, cell, event.target.value);
    }
    else{
      this.Invalid[rowIndex + '-' + cell] = !this.ValidTimeEntry(rowIndex, cell, +event.target.value);
    }

  }
  // selectAllContent($event) {
  //   $event.target.select();
  // }

  UpdateCrewTime(event, cell, rowIndex) {
    if (cell == "otherType") {
      this.CrewTimeEntries[rowIndex][cell] = event.target.value;
      if (this.ValidTimeEntry(rowIndex, cell, event.target.value)) {
        this.editing[rowIndex + '-' + cell] = false;
      }
      else{
        this.Invalid[rowIndex + '-' + cell] = true;
        return;
      }
    }    
    else {
      this.CrewTimeEntries[rowIndex][cell] = +event.target.value;
      if (this.ValidTimeEntry(rowIndex, cell, +event.target.value)) {
        this.editing[rowIndex + '-' + cell] = false;
      }
      else {
        this.Invalid[rowIndex + '-' + cell] = true;
        return;
      }
    }
    this.CrewTimeEntries = [...this.CrewTimeEntries];
    this.UpdateCrewDailyTotals();
    this.UpdateCrewDailyTotals_Area();
  }

  DeleteTimeEntry(event, rowIndex) {
    var row = this.CrewTimeEntries[rowIndex];
    console.log(row);
    row["reg"] = "0";
    row["ot"] = "0";
    row["dt"] = "0";
    row["other"] = "0";
    row["otherType"] = "Select";
    this.UpdateCrewDailyTotals();
    this.UpdateCrewDailyTotals_Area();
  }

  UpdateCrewTimeTab(CrewId): void {
    this.CrewTimeEntries_WithoutFilter = [
      {
        "crew": '01-1000.001', "costCode": "B-01", "costCodeDescription": "BR WALES", "area": "",
        "reg": 1, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      },
      {
        "crew": '01-1000.001', "costCode": "B-02", "costCodeDescription": "BRACES", "area": "P2",
        "reg": 2, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      },
      {
        "crew": '01-1000.001', "costCode": "B-01", "costCodeDescription": "BR WALES", "area": "",
        "reg": 1, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      },
      {
        "crew": '01-1000.001', "costCode": "B-02", "costCodeDescription": "BRACES", "area": "P2",
        "reg": 2, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      },
      {
        "crew": '01-1000.001', "costCode": "B-01", "costCodeDescription": "BR WALES", "area": "",
        "reg": 1, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      },
      {
        "crew": '01-1000.001', "costCode": "B-02", "costCodeDescription": "BRACES", "area": "P2",
        "reg": 2, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      },
      {
        "crew": '01-1000.001', "costCode": "B-01", "costCodeDescription": "BR WALES", "area": "",
        "reg": 1, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      },
      {
        "crew": '01-1000.001', "costCode": "B-02", "costCodeDescription": "BRACES", "area": "P2",
        "reg": 2, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      },
      {
        "crew": '01-1000.001', "costCode": "B-01", "costCodeDescription": "BR WALES", "area": "",
        "reg": 1, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      },
      {
        "crew": '01-1000.001', "costCode": "B-02", "costCodeDescription": "BRACES", "area": "P2",
        "reg": 2, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      },
      // {
      //   "crew": '01-1000.001', "costCode": "B-01", "costCodeDescription": "BR WALES", "area": "",
      //   "reg": 1, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      // },
      // {
      //   "crew": '01-1000.001', "costCode": "B-02", "costCodeDescription": "BRACES", "area": "P2",
      //   "reg": 2, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      // },
      // {
      //   "crew": '01-1000.001', "costCode": "B-01", "costCodeDescription": "BR WALES", "area": "",
      //   "reg": 1, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      // },
      // {
      //   "crew": '01-1000.001', "costCode": "B-02", "costCodeDescription": "BRACES", "area": "P2",
      //   "reg": 2, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      // },
      // {
      //   "crew": '01-1000.001', "costCode": "B-01", "costCodeDescription": "BR WALES", "area": "",
      //   "reg": 1, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      // },
      // {
      //   "crew": '01-1000.001', "costCode": "B-02", "costCodeDescription": "BRACES", "area": "P2",
      //   "reg": 2, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      // },
      // {
      //   "crew": '01-1000.001', "costCode": "B-01", "costCodeDescription": "BR WALES", "area": "",
      //   "reg": 1, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      // },
      // {
      //   "crew": '01-1000.001', "costCode": "B-02", "costCodeDescription": "BRACES", "area": "P2",
      //   "reg": 2, "ot": 0, "dt": 0, "other": 0, "otherType": ""
      // }
    ];

    this.CrewTimeEntries = this.CrewTimeEntries_WithoutFilter

    this.CrewMembers = [
      { employeeName: "Abc, Pqr", role: "Carpenter" },
      { employeeName: "Mnv,petg", role: "Labor" },
      { employeeName: "ujfdsd,Pdsd", role: "Assistant" },
      { employeeName: "Abc, Pqr", role: "Carpenter" },
      { employeeName: "Abc, Pqr", role: "Carpenter" },
      { employeeName: "Mnv,petg", role: "Labor" },
      { employeeName: "ujfdsd,Pdsd", role: "Assistant" },
      { employeeName: "Abc, Pqr", role: "Carpenter" },
      { employeeName: "Abc, Pqr", role: "Carpenter" },
      { employeeName: "Mnv,petg", role: "Labor" },
      { employeeName: "ujfdsd,Pdsd", role: "Assistant" },
      { employeeName: "Abc, Pqr", role: "Carpenter" },
      { employeeName: "Abc, Pqr", role: "Carpenter" },
      { employeeName: "Mnv,petg", role: "Labor" },
      { employeeName: "ujfdsd,Pdsd", role: "Assistant" },
      { employeeName: "Abc, Pqr", role: "Carpenter" },
      { employeeName: "Abc, Pqr", role: "Carpenter" },
      { employeeName: "Mnv,petg", role: "Labor" },
      { employeeName: "ujfdsd,Pdsd", role: "Assistant" },
      { employeeName: "Abc, Pqr", role: "Carpenter" },
      { employeeName: "Abc, Pqr", role: "Carpenter" },
      { employeeName: "Mnv,petg", role: "Labor" },
      { employeeName: "ujfdsd,Pdsd", role: "Assistant" },
      { employeeName: "Abc, Pqr", role: "Carpenter" },
    ];

    this.UpdateCrewDailyTotals();
    this.UpdateCrewDailyTotals_Area();
  }

  UpdateCrewDailyTotals(): void {
    var TimeEntryCount = this.CrewTimeEntries_WithoutFilter.length;
    this.CrewDailyTotal[0]["reg"] = 0;
    this.CrewDailyTotal[0]["ot"] = 0;
    this.CrewDailyTotal[0]["dt"] = 0;
    this.CrewDailyTotal[0]["other"] = 0;

    for (var i = 0; i < TimeEntryCount; i++) {
      this.CrewDailyTotal[0]["reg"] += +this.CrewTimeEntries_WithoutFilter[i]["reg"];
      this.CrewDailyTotal[0]["ot"] += +this.CrewTimeEntries_WithoutFilter[i]["ot"];
      this.CrewDailyTotal[0]["dt"] += +this.CrewTimeEntries_WithoutFilter[i]["dt"];
      this.CrewDailyTotal[0]["other"] += +this.CrewTimeEntries_WithoutFilter[i]["other"];
    }

    this.CrewDailyTotal = [...this.CrewDailyTotal];
  }

  UpdateCrewDailyTotals_Area(): void {
    this.CrewDailyTotal_Area[0]["reg"] = 0;
    this.CrewDailyTotal_Area[0]["ot"] = 0;
    this.CrewDailyTotal_Area[0]["dt"] = 0;
    this.CrewDailyTotal_Area[0]["other"] = 0;


    if (this._area != "Select") {
      var TimeEntryCount = this.CrewTimeEntries.length;

      for (var i = 0; i < TimeEntryCount; i++) {
        this.CrewDailyTotal_Area[0]["reg"] += +this.CrewTimeEntries[i]["reg"];
        this.CrewDailyTotal_Area[0]["ot"] += +this.CrewTimeEntries[i]["ot"];
        this.CrewDailyTotal_Area[0]["dt"] += +this.CrewTimeEntries[i]["dt"];
        this.CrewDailyTotal_Area[0]["other"] += +this.CrewTimeEntries[i]["other"];
      }
    }
    this.CrewDailyTotal_Area = [...this.CrewDailyTotal_Area];
  }


  FilterCrewTime(area, division): void {

    var length = this.CrewTimeEntries_WithoutFilter.length;
    this.CrewTimeEntries = [];

    if (area != "Select") {
      for (var i = 0; i < length; i++) {
        if (this.CrewTimeEntries_WithoutFilter[i]["area"] == area)
          this.CrewTimeEntries.push(this.CrewTimeEntries_WithoutFilter[i])
      }
    }
    else {
      this.CrewTimeEntries = this.CrewTimeEntries_WithoutFilter
    }

    this.UpdateCrewDailyTotals_Area()

  }

  ValidTimeEntry(rowIndex, cell, value) {
    var IsValid = true;

    switch (cell) {
      case "reg":
      case "ot":
      case "dt":
        if (value < 0 || value > 8) {
          this.errors[rowIndex + '-' + cell] = "Time entry should be between 0 & 8. You have entered " + value;
          IsValid = false;
        }
        break;

      case "other":        
        if (value < 0 || value > 8) {
          console.log(5);          
          this.errors[rowIndex + '-' + cell] = "Time entry should be between 0 & 8. You have entered " + value;         
          IsValid = false;
        }
        else if (value > 0 && this.CrewTimeEntries[rowIndex]['otherType'] == "") {
          console.log(6);
          this.errors[rowIndex + '-' + cell] = "Select HR Type";
          this.editing[rowIndex + '-otherType']=true;
          this.Invalid[rowIndex + '-otherType']=true;
          this.errors[rowIndex + '-otherType']="Select HR Type";
          IsValid = false;
        }
        else if(value>0 && this.CrewTimeEntries[rowIndex]['otherType']!=""){
          console.log(7);
          this.editing[rowIndex + '-otherType']=false;
          this.Invalid[rowIndex + '-otherType']=false;
          this.errors[rowIndex + '-' + cell] = "Select HR Type";
        }
        else if(value==0 && this.CrewTimeEntries[rowIndex]['otherType']!=""){
          console.log(8);
          this.editing[rowIndex + '-otherType']=true;
          this.Invalid[rowIndex + '-otherType']=true;
          this.errors[rowIndex + '-otherType'] = "Enter Other Time";
          IsValid=true;
        }
        else if(value==0 && this.CrewTimeEntries[rowIndex]['otherType']==""){
          console.log(9);
          this.editing[rowIndex + '-otherType']=false;
          this.Invalid[rowIndex + '-otherType']=false;
          IsValid=true;
        }
        
        break;
      case "otherType":
      console.log(value);
      console.log(this.CrewTimeEntries[rowIndex]['other'])
        
        if(value!="" && this.CrewTimeEntries[rowIndex]['other']==0){
          console.log(1);
          this.editing[rowIndex + '-other'] = true;
          this.Invalid[rowIndex + '-other'] = true;
          this.errors[rowIndex + '-other'] = "Enter Time";
          this.errors[rowIndex + '-' + cell] = "Enter Other Time";
          IsValid = false;
        }
        else if(value!="" && this.CrewTimeEntries[rowIndex]['other']>0 && this.CrewTimeEntries[rowIndex]['other']<=8){
          console.log(2);
          this.editing[rowIndex + '-other'] = false;
          this.Invalid[rowIndex + '-other'] = false;
          IsValid=true;
        }
        else if(value=="" && this.CrewTimeEntries[rowIndex]['other']>0){
          console.log(3);
          this.editing[rowIndex + '-other'] = true;
          this.Invalid[rowIndex + '-other'] = true;
          this.errors[rowIndex + '-other'] = "Select Hour Type";
          this.errors[rowIndex + '-' + cell] = "Select Hour Type";
          IsValid = false;
        }
        else if(value==""&& this.CrewTimeEntries[rowIndex]['other']==0){
          console.log(4);
          this.editing[rowIndex + '-other'] = false;
          this.Invalid[rowIndex + '-other'] = false;
          IsValid = true;
        }
          
        break;
    }   
    return IsValid;
  }

  ngOnInit() {
  }

}
