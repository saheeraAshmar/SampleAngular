import { Component,OnInit, Input } from "@angular/core"
import { Router, ActivatedRoute, Params } from "@angular/router"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthenticationService} from '../Service/authentication.service'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {

  @Input() UserAuthenticated:boolean
  
  constructor( private AuthenticationService: AuthenticationService ,
              private router: Router,) {}
  

  ngOnInit() {    
     
  }

}
