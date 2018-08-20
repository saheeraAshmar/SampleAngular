import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

 
@Injectable()
export class AuthenticationService {

    IsAuthenticated: boolean;

    constructor(private http: HttpClient) {        
        this.IsAuthenticated=false;
     }
 
    login(username: string, password: string) {
        return this.http.post<any>(`http://localhost:59083/api/user/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                console.log(user);
               if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    
                }                
                return user;
            }));
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.IsAuthenticated=false;
    }
    
}