import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { CONST_ROUTING } from './app.routing'; 

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectJobComponent } from './select-job/select-job.component';
import { JobListComponent } from './job-list/job-list.component';
import { CrewConfigComponent } from './crew-config/crew-config.component';
import { ManageCrewComponent } from './manage-crew/manage-crew.component';
import { FieldTimeComponent } from './field-time/field-time.component';
import { DailyCrewTimeComponent } from './daily-crew-time/daily-crew-time.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    SelectJobComponent,
    JobListComponent,
    CrewConfigComponent,
    ManageCrewComponent,
    FieldTimeComponent,
    DailyCrewTimeComponent
  ],
  entryComponents: [CrewConfigComponent,ManageCrewComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CONST_ROUTING,
    FormsModule,
    HttpModule,
    NgxDatatableModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
