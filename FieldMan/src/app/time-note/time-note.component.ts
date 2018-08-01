import { Component, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-time-note',
  templateUrl: './time-note.component.html',
  styleUrls: ['./time-note.component.css']
})
export class TimeNoteComponent implements OnInit {

  Employee:string
  Job:String;
  Area:String
  CostCode:String


  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) { }

  ngOnInit() {
  }

}
