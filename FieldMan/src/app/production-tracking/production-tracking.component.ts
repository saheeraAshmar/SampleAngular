import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, NgbActiveModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-production-tracking',
  templateUrl: './production-tracking.component.html',
  encapsulation: ViewEncapsulation.None, //Add this line to apply below css
  styles: [`
    @media screen {
        .modal-adaptive .modal-lg {
            width: 65% !important;
            max-width: calc(65%);
        }
        `]
})
export class ProductionTrackingComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) { }

  ngOnInit() {
  }

  

}
