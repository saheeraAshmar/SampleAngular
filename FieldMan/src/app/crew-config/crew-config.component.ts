import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { ManageCrewComponent } from '../manage-crew/manage-crew.component';
import { Crew } from '../BusinessModel/crew';
import {NgbModal, NgbActiveModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crew-config',
  templateUrl: './crew-config.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    @media screen {
        .modal-adaptive .modal-lg {
            width: 75% !important;
            max-width: calc(90%);
            opacity: 1 !important;
        }
        `]
})
export class CrewConfigComponent implements OnInit{ 
  Roles=[];
  Crews=[];
  SelectedRole:String
  SelectedName:String
  SelectedCrew:String

  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) {
    this.Roles=["Select", "CARPENTERS", "CARPENTERS APPRENTICE","ENG TECH AIDE","JOB SECRETARY","LABORERS"]
    this.SelectedRole="Select";
    this.SelectedName="";
    this.SelectedCrew="";  
    this.Crews=[
      new Crew("","Select",0,true),
      new Crew("01-1000.001","Crew1",8,true),
      new Crew("01-1000.002","Crew2",8,false),
      new Crew("01-1000.003","Crew3",8,true),
      new Crew("01-1000.004","Crew4",8,true)
    ]; 
  }

  ngOnInit(): void {   
    
    if(this.SelectedCrew ==""){
        //Load Members of the Crew
    }
    else{
      
    }
  }
  
 
  OpenManageCrew(flag):void{   
    
    if(flag){
      let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-adaptive modal-opened'};
      const modalRef = this.modalService.open(ManageCrewComponent,options);
      modalRef.componentInstance.CrewId= this.SelectedCrew            
  }
    else{
      if(this.SelectedCrew==""){
        alert("Select a Crew for Updation")
        return;
      }      
      let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-adaptive modal-opened'};
      const modalRef = this.modalService.open(ManageCrewComponent,options);
      modalRef.componentInstance.CrewId= this.SelectedCrew     
    
    }      
  }
 
}