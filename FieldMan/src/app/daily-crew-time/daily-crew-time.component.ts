import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { HrType } from '../BusinessModel/HRType';
import { Employee } from '../BusinessModel/employee';

@Component({
  selector: 'app-daily-crew-time',
  templateUrl: './daily-crew-time.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./daily-crew-time.component.css']
})
export class DailyCrewTimeComponent implements OnInit {

  @Input() JobId:string;

  private _area:string
  @Input() 
  set area(area: string) {
    this._area = area;
    this.UpdateCrewDailyTotals_Area();
  }

  @Input() HRTypes=[];

  editing = {};
  CrewTimeEntries_WithoutFilter=[];
  CrewTimeEntries = [];
  CrewMembers=[];
  CrewDailyTotal_Area=[];
  CrewDailyTotal=[];

  
  constructor() { 
    
    this.CrewTimeEntries_WithoutFilter=[];
    this.CrewTimeEntries=[];
    this.CrewMembers=[];
    this.CrewDailyTotal_Area=[
      { "reg":0,"ot":0,"dt":0,"other":0 }
    ];

    this.CrewDailyTotal=[
      {"reg":0,"ot":0,"dt":0,"other":0 }
    ];
   
  }
  
  get area(): string {
    // transform value for display
    return this._area.toUpperCase();
  }

  UpdateCrewTime(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    if(cell=="otherType")
      this.CrewTimeEntries[rowIndex][cell] = event.target.value;
    else
      this.CrewTimeEntries[rowIndex][cell] = +event.target.value;
    this.CrewTimeEntries = [...this.CrewTimeEntries];
    console.log('UPDATED!', this.CrewTimeEntries[rowIndex][cell]);
    this.UpdateCrewDailyTotals();
  }

  DeleteTimeEntry(event,rowIndex){
    var row = this.CrewTimeEntries[rowIndex];
    console.log(row);
    row["reg"]="0";
    row["ot"]="0";
    row["dt"]="0";
    row["other"]="0";
    row["otherType"]="Select"; 
    this.UpdateCrewDailyTotals();
    this.UpdateCrewDailyTotals_Area();   
  }

  UpdateCrewTimeTab(CrewId):void{
    this.CrewTimeEntries_WithoutFilter=[
      { "crew":'01-1000.001',"costCode":"B-01","costCodeDescription":"BR WALES","area":"",
        "reg":1,"ot":0,"dt":0,"other":0,"otherType":""
      },
      {"crew":'01-1000.001',"costCode":"B-02","costCodeDescription":"BRACES","area":"P2",
        "reg":2, "ot":0,"dt":0,"other":0,"otherType":""
      },
      { "crew":'01-1000.001',"costCode":"B-01","costCodeDescription":"BR WALES","area":"",
        "reg":1,"ot":0,"dt":0,"other":0,"otherType":""
      },
      {"crew":'01-1000.001',"costCode":"B-02","costCodeDescription":"BRACES","area":"P2",
        "reg":2, "ot":0,"dt":0,"other":0,"otherType":""
      },
      { "crew":'01-1000.001',"costCode":"B-01","costCodeDescription":"BR WALES","area":"",
        "reg":1,"ot":0,"dt":0,"other":0,"otherType":""
      },
      {"crew":'01-1000.001',"costCode":"B-02","costCodeDescription":"BRACES","area":"P2",
        "reg":2, "ot":0,"dt":0,"other":0,"otherType":""
      },
      { "crew":'01-1000.001',"costCode":"B-01","costCodeDescription":"BR WALES","area":"",
        "reg":1,"ot":0,"dt":0,"other":0,"otherType":""
      },
      {"crew":'01-1000.001',"costCode":"B-02","costCodeDescription":"BRACES","area":"P2",
        "reg":2, "ot":0,"dt":0,"other":0,"otherType":""
      },
      { "crew":'01-1000.001',"costCode":"B-01","costCodeDescription":"BR WALES","area":"",
        "reg":1,"ot":0,"dt":0,"other":0,"otherType":""
      },
      {"crew":'01-1000.001',"costCode":"B-02","costCodeDescription":"BRACES","area":"P2",
        "reg":2, "ot":0,"dt":0,"other":0,"otherType":""
      },
      { "crew":'01-1000.001',"costCode":"B-01","costCodeDescription":"BR WALES","area":"",
        "reg":1,"ot":0,"dt":0,"other":0,"otherType":""
      },
      {"crew":'01-1000.001',"costCode":"B-02","costCodeDescription":"BRACES","area":"P2",
        "reg":2, "ot":0,"dt":0,"other":0,"otherType":""
      },
      { "crew":'01-1000.001',"costCode":"B-01","costCodeDescription":"BR WALES","area":"",
        "reg":1,"ot":0,"dt":0,"other":0,"otherType":""
      },
      {"crew":'01-1000.001',"costCode":"B-02","costCodeDescription":"BRACES","area":"P2",
        "reg":2, "ot":0,"dt":0,"other":0,"otherType":""
      },
      { "crew":'01-1000.001',"costCode":"B-01","costCodeDescription":"BR WALES","area":"",
        "reg":1,"ot":0,"dt":0,"other":0,"otherType":""
      },
      {"crew":'01-1000.001',"costCode":"B-02","costCodeDescription":"BRACES","area":"P2",
        "reg":2, "ot":0,"dt":0,"other":0,"otherType":""
      },
      { "crew":'01-1000.001',"costCode":"B-01","costCodeDescription":"BR WALES","area":"",
        "reg":1,"ot":0,"dt":0,"other":0,"otherType":""
      },
      {"crew":'01-1000.001',"costCode":"B-02","costCodeDescription":"BRACES","area":"P2",
        "reg":2, "ot":0,"dt":0,"other":0,"otherType":""
      }
    ];
    
    this.CrewTimeEntries=this.CrewTimeEntries_WithoutFilter

    this.CrewMembers=[
      {employeeName:"Abc, Pqr",role:"Carpenter"},
      {employeeName:"Mnv,petg",role:"Labor"},
      {employeeName:"ujfdsd,Pdsd",role: "Assistant"},
      {employeeName:"Abc, Pqr",role:"Carpenter"},
      {employeeName:"Abc, Pqr",role:"Carpenter"},
      {employeeName:"Mnv,petg",role:"Labor"},
      {employeeName:"ujfdsd,Pdsd",role: "Assistant"},
      {employeeName:"Abc, Pqr",role:"Carpenter"},
      {employeeName:"Abc, Pqr",role:"Carpenter"},
      {employeeName:"Mnv,petg",role:"Labor"},
      {employeeName:"ujfdsd,Pdsd",role: "Assistant"},
      {employeeName:"Abc, Pqr",role:"Carpenter"},
      {employeeName:"Abc, Pqr",role:"Carpenter"},
      {employeeName:"Mnv,petg",role:"Labor"},
      {employeeName:"ujfdsd,Pdsd",role: "Assistant"},
      {employeeName:"Abc, Pqr",role:"Carpenter"},
      {employeeName:"Abc, Pqr",role:"Carpenter"},
      {employeeName:"Mnv,petg",role:"Labor"},
      {employeeName:"ujfdsd,Pdsd",role: "Assistant"},
      {employeeName:"Abc, Pqr",role:"Carpenter"},
      {employeeName:"Abc, Pqr",role:"Carpenter"},
      {employeeName:"Mnv,petg",role:"Labor"},
      {employeeName:"ujfdsd,Pdsd",role: "Assistant"},
      {employeeName:"Abc, Pqr",role:"Carpenter"},
    ];
    
    this.UpdateCrewDailyTotals();
    this.UpdateCrewDailyTotals_Area();
  }

  UpdateCrewDailyTotals():void{
    var TimeEntryCount=this.CrewTimeEntries_WithoutFilter.length;
    this.CrewDailyTotal[0]["reg"]=0;
    this.CrewDailyTotal[0]["ot"]=0;
    this.CrewDailyTotal[0]["dt"]=0;
    this.CrewDailyTotal[0]["other"]=0;
    
    for(var i=0;i<TimeEntryCount;i++){      
      this.CrewDailyTotal[0]["reg"]+= +this.CrewTimeEntries_WithoutFilter[i]["reg"];
      this.CrewDailyTotal[0]["ot"]+= +this.CrewTimeEntries_WithoutFilter[i]["ot"];
      this.CrewDailyTotal[0]["dt"]+= +this.CrewTimeEntries_WithoutFilter[i]["dt"];
      this.CrewDailyTotal[0]["other"]+= +this.CrewTimeEntries_WithoutFilter[i]["other"];
    }  

    this.CrewDailyTotal = [...this.CrewDailyTotal];    
  }

  UpdateCrewDailyTotals_Area():void{
    this.CrewDailyTotal_Area[0]["reg"]=0;
    this.CrewDailyTotal_Area[0]["ot"]=0;
    this.CrewDailyTotal_Area[0]["dt"]=0;
    this.CrewDailyTotal_Area[0]["other"]=0;    
    

    if(this._area!="Select"){
      var TimeEntryCount=this.CrewTimeEntries.length;      
      
      for(var i=0;i<TimeEntryCount;i++){      
        this.CrewDailyTotal_Area[0]["reg"]+= +this.CrewTimeEntries[i]["reg"];
        this.CrewDailyTotal_Area[0]["ot"]+= +this.CrewTimeEntries[i]["ot"];
        this.CrewDailyTotal_Area[0]["dt"]+= +this.CrewTimeEntries[i]["dt"];
        this.CrewDailyTotal_Area[0]["other"]+= +this.CrewTimeEntries[i]["other"];
      }
    }    
    this.CrewDailyTotal_Area = [...this.CrewDailyTotal_Area];   
  }


  FilterCrewTime(area,division):void{
    
    var length=this.CrewTimeEntries_WithoutFilter.length;
    this.CrewTimeEntries=[];
    
    if(area!="Select"){
      for(var i=0;i<length;i++){
        if(this.CrewTimeEntries_WithoutFilter[i]["area"]==area)
          this.CrewTimeEntries.push(this.CrewTimeEntries_WithoutFilter[i])
      }
    }
    else{
      this.CrewTimeEntries=this.CrewTimeEntries_WithoutFilter
    }   

    this.UpdateCrewDailyTotals_Area()
   
  }

  ngOnInit() {
  }

}
