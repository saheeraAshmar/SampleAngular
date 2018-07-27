import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { ManageCrewComponent } from '../manage-crew/manage-crew.component';
import { Crew } from '../BusinessModel/crew';

@Component({
  selector: 'app-crew-config',
  templateUrl: './crew-config.component.html',
  styles: []
})
export class CrewConfigComponent extends DialogComponent<CrewConfigComponent, boolean> implements CrewConfigComponent {
  Roles=[];
  Crews=[];
  SelectedRole:String
  SelectedName:String
  SelectedCrew:String

  constructor(dialogService: DialogService) {
    super(dialogService);
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
 
  OpenManageCrew(flag):void{   
    
    if(flag){
     this.dialogService.addDialog(ManageCrewComponent,{
        CrewId:""
     });        
  }
    else{
      if(this.SelectedCrew==""){
        alert("Select a Crew for Updation")
        return;
      }      
     this.dialogService.addDialog(ManageCrewComponent,{
        CrewId:this.SelectedCrew,
      })  
    }      
  }
  // confirm() {
  //   // we set dialog result as true on click on confirm button, 
  //   // then we can get dialog result from caller code 
  //   this.result = true;
  //   this.close();
  // }
}