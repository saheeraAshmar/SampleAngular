import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily-crew-time',
  templateUrl: './daily-crew-time.component.html',
  styleUrls: ['./daily-crew-time.component.css']
})
export class DailyCrewTimeComponent implements OnInit {

  @Input() JobId:string;
  constructor() { }

  ngOnInit() {
  }

}
