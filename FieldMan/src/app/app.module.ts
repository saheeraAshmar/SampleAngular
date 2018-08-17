import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CustomMinDirective } from './CustomDirectives/custom-min-validator.directive';
import { CustomMaxDirective } from './CustomDirectives/custom-max-validator.directive';
import { AppendSymbolPipe } from './CustomPipes/append-symbol.pipe'



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
import { DailyEmployeeTimeComponent } from './daily-employee-time/daily-employee-time.component';
import { NewTimeEntryComponent } from './new-time-entry/new-time-entry.component';
import { TimeNoteComponent } from './time-note/time-note.component';
import { ReimbursablesComponent } from './reimbursables/reimbursables.component';
import { NewReimbComponent } from './new-reimb/new-reimb.component';
import { QuantityTrackingComponent } from './quantity-tracking/quantity-tracking.component';
import { ProductionTrackingComponent } from './production-tracking/production-tracking.component';
import { QuantityEntryComponent } from './quantity-entry/quantity-entry.component';
import { DailyQuantityEntryComponent } from './daily-quantity-entry/daily-quantity-entry.component';
import { NoQtyBudgetComponent } from './no-qty-budget/no-qty-budget.component';






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
    DailyCrewTimeComponent,
    DailyEmployeeTimeComponent,
    NewTimeEntryComponent,
    TimeNoteComponent,
    ReimbursablesComponent,
    NewReimbComponent,
    QuantityTrackingComponent,
    ProductionTrackingComponent,
    QuantityEntryComponent,
    DailyQuantityEntryComponent,
    NoQtyBudgetComponent,
    CustomMinDirective,
    CustomMaxDirective,
    AppendSymbolPipe,
  ],
  entryComponents: [CrewConfigComponent,ManageCrewComponent,NewTimeEntryComponent,TimeNoteComponent,NewReimbComponent,ProductionTrackingComponent,DailyQuantityEntryComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CONST_ROUTING,
    FormsModule,
    HttpModule,
    NgxDatatableModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
