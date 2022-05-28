import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersDataService } from '../services/users-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private services:UsersDataService, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let verifyToken = localStorage.getItem('xToken');
      if(verifyToken){
        return true;
      }
      else{
        this.route.navigate(['login'])
        return false;
      }   
    }
  
}
