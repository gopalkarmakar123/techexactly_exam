import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _router:Router, private _apiService: ApiService) { }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    //check some condition  
    if (this._apiService.token == '') {
      alert('You are not allowed to view this page');
      //redirect to login/home page etc
      //return false to cancel the navigation
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }
}
