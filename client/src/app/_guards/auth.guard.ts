
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private router: Router, private service : AccountService, private toastr: ToastrService){
 
  }
 
  canActivate() : Observable<any | boolean>
  {
    return this.service.currentUser$.pipe(
      map(user  =>{
        console.log('auth guard: ' + user);
 
        return true; 
        
        
         /* this.router.navigate(['/forbidden']); */
        
        this.toastr.error('You needd to login.');
      })
    )
    }
  }
