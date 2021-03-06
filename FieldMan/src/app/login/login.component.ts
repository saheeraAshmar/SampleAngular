import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
 
import { AuthenticationService } from '../Service/authentication.service';
import {LoadingIndicatorService} from '../Service/LoadingIndicator.Service'
 
@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error={};
 
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private loadingIndicatorService: LoadingIndicatorService
      ) {

        // change isLoading status whenever notified
            loadingIndicatorService
            .onLoadingChanged
            .subscribe(isLoading => this.loading = isLoading);
      }
 
    ngOnInit() {

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        if(localStorage.getItem('currentUser') !=null){
            this.router.navigate([this.returnUrl]);
        }


        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
 
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
 
    onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
 
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.loading = false;
                    this.error={
                        "type":"error",
                        "text":"Username or password is incorrect"
                    }
                });
    }

    
}