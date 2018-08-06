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
            width: 95% !important;
            max-width: calc(95%);
        }
        `]
})
export class CrewConfigComponent implements OnInit{ 
  Roles=[];
  Crews=[];
  SelectedRole:String;
  SelectedName:String;
  SelectedCrew:String;

  selectedEmployees = [];
  selectedCrewMembers=[];

  EmployeeList=[];
  CrewMemberList=[];

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

    this.CrewMemberList=[
      {
        "CrewLead":true,
        "Crew":"01-1000.001",
        "EmployeeId":6124,
        "Name":"ADAM; JOSEPH E",
        "Role":"OPER.ENIGINEERS"
      },
      {
        "CrewLead":false,
        "Crew":"01-1000.001",
        "EmployeeId":87451,
        "Name":"AGUILAR;  WILSON JIMENEZ",
        "Role":"CARPENTERS"
      },
      
    ];

    this.EmployeeList=[
      {
      "Role":"OPER.ENIGINEERS","EmployeeId":87451, "Name":"ADAM; JOSEPH E", "CurrentCrew":"01-1000.001",
      "CurrentJob":"01-1000"
      },
      {
        "Role":"CARPENTERS",
        "EmployeeId":6124,
        "Name":"AGUILAR;  WILSON JIMENEZ",
        "CurrentCrew":"",
        "CurrentJob":""
      },
      {
        "Role":"EMPLOYEE",
        "EmployeeId":3333,
        "Name":"ABC;  PQR",
        "CurrentCrew":"",
        "CurrentJob":""
      }
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
      let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-opened'};
      const modalRef = this.modalService.open(ManageCrewComponent,options);
      modalRef.componentInstance.CrewId= this.SelectedCrew            
  }
    else{
      if(this.SelectedCrew==""){
        alert("Select a Crew for Updation")
        return;
      }      
      let options: NgbModalOptions = {backdrop:'static',size: 'lg',centered: true, windowClass: 'modal-opened'};
      const modalRef = this.modalService.open(ManageCrewComponent,options);
      modalRef.componentInstance.CrewId= this.SelectedCrew     
    
    }      
  }
 
  onSelectEmployee({ selected }) {    
    this.selectedEmployees.splice(0, this.selectedEmployees.length);
    this.selectedEmployees.push(...selected);
  }

 

onActivateEmployee(event) { 
   if (event.type === 'dblclick') {
      this.AddCrewMembers();
   }
  }

  onSelectCrewMember({ selected }) {    
    this.selectedCrewMembers.splice(0, this.selectedCrewMembers.length);
    this.selectedCrewMembers.push(...selected);
  }

  onActivateCrewMember(event){  
    if (event.type === 'dblclick' && event.cellIndex!=0) {
      this.RemoveCrewMembers();
   }
  }
  

  AddCrewMembers(){
    if(this.SelectedCrew ==""){
      alert("Please select a Crew from the Crew Selection List on the right");
      return;
    }
    else if(this.selectedEmployees.length==0){
      alert("Please select at least one employee to move");
      return;
    }
    else{
      var l=this.selectedEmployees.length;
      console.log(this.selectedEmployees)
      
      for(var i=0;i<l;i++){   
        console.log("l is "+l+" and i is "+i);

        var NewMember={
          "CrewLead":false,
          "Crew":this.SelectedCrew,
          "EmployeeId":this.selectedEmployees[i].EmployeeId,
          "Name":this.selectedEmployees[i].Name,
          "Role":this.selectedEmployees[i].Role
        }
        this.CrewMemberList.push(NewMember);       
        
        for(var j= 0; j< this.EmployeeList.length;j++) {
          if (this.selectedEmployees[i].EmployeeId === this.EmployeeList[j].EmployeeId) {
            /*Removing From  Emp List*/
            this.EmployeeList.splice(j,1);

            /*Updating Current Crew/Job */
            //this.EmployeeList[j].CurrentCrew=this.SelectedCrew;
            //this.EmployeeList[j].CurrentJob="01-1111";
            break;
         }
        
        }         

    }
    this.EmployeeList = [...this.EmployeeList];
      this.CrewMemberList = [...this.CrewMemberList];
      this.selectedEmployees = [];
  }
}

RemoveCrewMembers(){
  if(this.selectedCrewMembers.length==0){
    alert("Please select at least one crew memeber to move");
    return;
  }
  else{
    var l=this.selectedCrewMembers.length;
    for(var i=0;i<l;i++){        
      var Member={
        "Role":this.selectedCrewMembers[i].Role,
        "EmployeeId":this.selectedCrewMembers[i].EmployeeId,
        "Name":this.selectedCrewMembers[i].Name,
        "CurrentCrew":"",
        "CurrentJob":""
      }
    this.EmployeeList.push(Member);     

      
      for(var j= 0; j< this.CrewMemberList.length;j++) {
        if (this.selectedCrewMembers[i].EmployeeId === this.CrewMemberList[j].EmployeeId) {
          /*Removing From  Emp List*/
          this.CrewMemberList.splice(j,1);         
          break;
       }
      
    }     

  }
  this.EmployeeList = [...this.EmployeeList];
    this.CrewMemberList = [...this.CrewMemberList];
    this.selectedCrewMembers = []; 
}
}

UpdateCrewLead(rowIndex){
  this.CrewMemberList[rowIndex]["CrewLead"]=!this.CrewMemberList[rowIndex]["CrewLead"];
}

  
}
