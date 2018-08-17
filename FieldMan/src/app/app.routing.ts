import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectJobComponent } from './select-job/select-job.component';
import { FieldTimeComponent } from './field-time/field-time.component';
import { QuantityTrackingComponent } from './quantity-tracking/quantity-tracking.component';
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'quantityTracking', component: QuantityTrackingComponent },
    { path: 'fieldTime', component: FieldTimeComponent },
    { path: 'selectJob', component: SelectJobComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
