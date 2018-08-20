import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectJobComponent } from './select-job/select-job.component';
import { FieldTimeComponent } from './field-time/field-time.component';
import { QuantityTrackingComponent } from './quantity-tracking/quantity-tracking.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './Guards/auth.guard'


const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    // { path: '', redirectTo: '/login', pathMatch: 'full'},
    // { path: 'login', component: LoginComponent },
    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'quantityTracking', component: QuantityTrackingComponent },
    // { path: 'fieldTime', component: FieldTimeComponent },
    // { path: 'selectJob', component: SelectJobComponent }
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
    { path: 'quantityTracking', component: QuantityTrackingComponent,canActivate: [AuthGuard] },
    { path: 'fieldTime', component: FieldTimeComponent,canActivate: [AuthGuard]},
    { path: 'selectJob', component: SelectJobComponent,canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
