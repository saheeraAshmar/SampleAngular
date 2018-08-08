import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, NgbActiveModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-production-tracking',
  templateUrl: './production-tracking.component.html',
  encapsulation: ViewEncapsulation.None, //Add this line to apply below Style Url
  styleUrls: ['./production-tracking.component.css']
})
export class ProductionTrackingComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) { }

  ngOnInit() {
  }

  

}
