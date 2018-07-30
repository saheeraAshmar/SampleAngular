import { Component, OnInit } from '@angular/core';
import { Crew } from '../BusinessModel/crew';
import {NgbModal, NgbActiveModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-manage-crew',
  templateUrl: './manage-crew.component.html',
  styles: []
})
export class ManageCrewComponent implements Crew,OnInit {
  CrewId: string;
  CrewDescription:string
  ShiftLength:number
  IsActive:Boolean

  Crews=[];

  Crew:Crew;
  IsUpdate:Boolean;
  title:string;
  SelectedCrew:String
  

  constructor(public activeModal: NgbActiveModal) {    
    
  }
    

  ngOnInit(): void {

    this.Crews=[
      new Crew("","Select",0,true),
      new Crew("01-1000.001","Crew1",8,true),
      new Crew("01-1000.002","Crew2",8,false),
      new Crew("01-1000.003","Crew3",8,true),
      new Crew("01-1000.004","Crew4",8,true)
    ];
    
    if(this.CrewId ==""){
        this.title="Create New Crew";
        this.IsUpdate=false;
        this.Crew=new Crew('01-1000.005','',8,true);
    }
    else{
      this.title="Change Crew Information";
      this.IsUpdate=true;
      this.Crew=this.Crews.find(x => x.CrewId == this.CrewId);
    }
  }

}
